const Appointment = require('../models/appointment')
const nodemailer = require('nodemailer')

const index = (req, res)=>{
    res.status(200).render('index', {title: ''})
}
const about = (req, res)=>{
    res.status(200).render('about', {title: 'About | '})
}
const contact = (req, res)=>{
    res.status(200).render('contact', {title: 'Contact | '})
}
const services = (req, res)=>{
    res.status(200).render('services', {title: 'Services | '})
}
const gallery = (req, res)=>{
    res.status(200).render('gallery', {title: 'Gallery | '})
}
const schedule = (req, res)=>{
    res.status(200).render('schedule', {title: 'Schedule Appointment | '})
}
const thanks = (req,res)=>{
    console.log('request made');
    console.log(req.body);
    const appointment = new Appointment({
        services: req.body.services,
        staff: req.body.staff,
        date: req.body.date,
        time: req.body.time,
        total: req.body.total,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    })
    appointment.save()
    .then(result =>{
        res.render('thanks', {title: 'Thank You | ', email: req.body.email, services: req.body.services, staff: req.body.staff, date: req.body.date, time: req.body.time, total: req.body.total})
    })
    .catch(err => console.log(err))
}

const newsletter = (req,res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.MAIL_USER}`,
            pass: `${process.env.MAIL_PASS}`
        }
    });
    const mailOptions = {
        from: `${process.env.MAIL_USER}`,
        to: `${req.body.modalEmail}`,
        subject: 'Super Cool Barber Shop',
        text: `Thanks for signing up to our newsletter!`
    };
    transporter.sendMail(mailOptions, (err, info) =>{
        if(err){
            console.log(err);
        } else{
            console.log(`Email sent: ${info.response}`);
        }
    })
    res.redirect('/')
}

module.exports = {
    index,
    about,
    contact,
    services,
    gallery,
    schedule,
    thanks,
    newsletter
}