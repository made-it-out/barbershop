const Appointment = require('../models/appointment')
const Email = require('../models/email')
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
//Check what times are available
const available = (req, res) => {
    const staff = req.params.staff;
    const date = req.params.date;
    //declare array of taken times
    let taken = [];
    //search DB for appointments with the same staff member and date
    Appointment.find({staff, date})
    .then(result => {
        //for each appt in DB, push the appt time into taken array
        result.forEach(appt => {
            taken.push(appt.time);
        });
        //send taken to client
        res.json(taken);
    })
    .catch(err => console.log(err))
}
const thanks = (req,res)=>{
    console.log('request made');
    console.log(req.body);
    //Create new appointment
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
        //Send email with appt details
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.MAIL_USER}`,
                pass: `${process.env.MAIL_PASS}`
            }
        });
        const mailOptions = {
            from: `${process.env.MAIL_USER}`,
            to: `${req.body.email}`,
            subject: `Super Cool Barber Shop`,
            html: `<h1>Appointment Details</h1>
            <h3>Services:</h3> <p>${req.body.services}</p>
            <h3>Staff:</h3> <p>${req.body.staff}</p>
            <h3>Date:</h3> <p>${req.body.date}</p>
            <h3>Time:</h3> <p>${req.body.time}</p>
            <h3>Total:</h3> <b>${req.body.total}</b>
            
            <i>*There is a $15 fee for appointments cancelled less than 24 hours before their scheduled time</i>`
        };
        transporter.sendMail(mailOptions, (err, info) =>{
            if(err){
                console.log(err);
            } else{
                console.log(`Email sent: ${info.response}`);
            }
        })
    })
    .catch(err => console.log(err))
}

const newsletter = (req,res) => {
    //Save email from modal
    const freshEmail = new Email({
        email: req.body.modalEmail
    })
    freshEmail.save()
    .then(result => {
        //Send email
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
    })
    .catch(err => {
        res.redirect('/')
    })
   
}

module.exports = {
    index,
    about,
    contact,
    services,
    gallery,
    schedule,
    available,
    thanks,
    newsletter
}