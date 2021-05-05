const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const mainRoutes = require('./routes/mainRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express()

const port = process.env.PORT || 5000
//connect to mongodb
const dbURI = process.env.DB_URI
mongoose.connect('mongodb+srv://made-it-out:test12345@mycluster.2t33q.mongodb.net/barbershop', {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    app.listen(port);
})
.catch((err) => console.log(err))

//register view engine
app.set('view engine', 'ejs')

//middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//main routes
app.use(mainRoutes)

//admin routes
app.use(adminRoutes)

//404
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'})
})