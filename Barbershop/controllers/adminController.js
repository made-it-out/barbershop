const Message = require('../models/message')
const Appointment = require('../models/appointment')

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

module.exports = {
    apptIndex,
    //apptPost,
    singleApptGet,
    singleApptDelete,
    msgIndex,
    msgPost,
    singleMsgGet,
    singleMsgDelete
}