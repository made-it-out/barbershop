const Message = require('../models/message')
const Appointment = require('../models/appointment')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

//Appointments
const apptIndex = (req,res) =>{
    console.log('loading appointments');
    Appointment.find().sort({createdAt: -1})
    .then((result)=>{
        res.status(200).render('appointments', {title: 'Appointments | ', style: 'appointments', appointments: result})
    })
    .catch(err => console.log(err))
}
const singleApptGet = (req,res)=>{
    const id = req.params.id
    Appointment.findById(id)
    .then(result =>{
        res.render('single-appointment', {appointment: result, title: `${result.name}'s appointment | `, style: 'appointments'})
    })
    .catch(err => console.log(err))
}
const singleApptDelete = (req,res)=>{
    const id = req.params.id
    Appointment.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/appointments'})
    })
    .catch(err => console.log(err))
}

//Messages
const msgIndex = (req, res)=>{
    Message.find().sort({createdAt: -1})
    .then((result)=>{
        res.status(200).render('messages', {title: 'Messages | ', style: 'messages', messages: result})
    })
    .catch(err => console.log(err))
}
const msgPost = (req,res)=>{
    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        body: req.body.message
    })
    message.save()
    .then(result =>{
        res.redirect('/contact')
    })
    .catch(err => console.log(err))
}
const singleMsgGet = (req,res)=>{
    const id = req.params.id
    Message.findById(id)
    .then(result =>{
        res.render('single-message', {message: result, title: `${result.name} sent a message | `, style: 'messages'})
    })
    .catch(err => console.log(err))
}
const singleMsgDelete = (req,res)=>{
    const id = req.params.id
    Message.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/messages'})
    })
    .catch(err => console.log(err))
}

//handle errors
const handleErrors = (err) =>{
    console.log(err.message, err.code);
    let errors = {email: '', password: ''}

    //incorrect email
    if(err.message === 'incorrect email'){
        errors.email = 'Email is not registered'
    }
    //incorrect password
    if(err.message === 'incorrect password'){
        errors.password = 'Password is incorrect'
    }

    //duplicate error code (for sign up)
    // if(err.code === 11000){
    //     errors.email = 'That email is already registered';
    //     return errors;
    // }

    //validation errors
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) =>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}

//jwt
const maxAge = 24*60*60;
const createToken = (id) =>{    
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: maxAge
    })
}

const loginGet = (req,res) =>{
    res.render('login', {title: 'Login | '})
}
const loginPost = async (req,res) =>{
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000})
        res.status(200).json({user: user._id})
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({errors})
    }
}

const logoutGet = (req,res) =>{
    res.cookie('jwt', '', {maxAge: 1})
    res.redirect('/login')
}

const adminGet = (req,res) => {
    res.render('admin', {title: 'Admin | '})
}

module.exports = {
    apptIndex,
    singleApptGet,
    singleApptDelete,
    msgIndex,
    msgPost,
    singleMsgGet,
    singleMsgDelete,
    loginGet,
    loginPost,
    logoutGet,
    adminGet
}