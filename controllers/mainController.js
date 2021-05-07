const Appointment = require('../models/appointment')

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

module.exports = {
    index,
    about,
    contact,
    services,
    gallery,
    schedule,
    thanks
}