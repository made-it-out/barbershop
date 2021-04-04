window.addEventListener('load',() =>{
    sessionStorage.removeItem('services')
    sessionStorage.removeItem('price')
    sessionStorage.removeItem('staff')
    sessionStorage.removeItem('date')
    sessionStorage.removeItem('time')
})

//Side Nav
const burger = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const smallScreenNav = document.querySelector('.small-screen-nav');
const smallScreenNavLogo = document.querySelector('.small-screen-nav a')

burger.addEventListener('click', () =>{
    nav.classList.toggle('open')
    if(nav.classList.contains('open')){
        burger.innerHTML = '<i class="fas fa-times fa-3x"></i>'
        smallScreenNavLogo.style.display = 'none'
    } else{
        burger.innerHTML = '<i class="fas fa-bars fa-3x"></i>'
        smallScreenNavLogo.style.display = 'block'
    }
})

//Sections
const sectionWrap = document.querySelector('#sectionWrap')
const scheduleSection = document.querySelector('.schedule-section')
const dateSection = document.querySelector('.dateAndTime')
const apptInfoSection = document.querySelector('#apptInfo')
const paySection = document.querySelector('#payment')
const thanksSection = document.querySelector('#thanks')

const continueBtn = document.querySelector('#continueBtn')
const backBtn = document.querySelector('#backBtn')

const pages = [scheduleSection, dateSection, apptInfoSection, paySection, thanksSection]
//Services
let servicesStorage = []
const adultCut = document.getElementById('adultCut')
const trim = document.getElementById('trim')
const shave = document.getElementById('shave')
const facial = document.getElementById('facial')
const kidCut = document.getElementById('kidCut')
const design = document.getElementById('design')
const coloring = document.getElementById('coloring')
const braiding = document.getElementById('braiding')
//Prices
let prices = []
const adultCutPrice = 30
const trimPrice = 20
const shavePrice = 30
const facialPrice = 30
const kidCutPrice = 20
const designPrice = 15
const coloringPrice = 30
const braidingPrice = 35
//Staff
const anyone = document.getElementById('anyone')
const billyBob = document.getElementById('billyBob')
const tMoney = document.getElementById('tMoney')
const william = document.getElementById('william')
const harold = document.getElementById('harold')
//Appointment Details
const apptDetails = {
    services: servicesStorage,
    staff: '',
    date: '',
    time: '',
    total: ''
}
const apptDetailsContainer = document.createElement('div')
apptDetailsContainer.classList.add('apptDetails')

//Page Flip
let i = 0;
continueBtn.addEventListener('click', () =>{
    continueBtn.style.display = 'none'
    if(i < 4 && i > -2){
        i++
    } switch(i){
        // case 0:
        //     pages[i].classList.add('pageShow');
        //     backBtn.style.display = 'inline';
        //     break;
        case 1:
            //Add services, prices, & barber to storage
            if(adultCut.checked){servicesStorage.push(`Adult's Haircut`)
            prices.push(adultCutPrice)}
            if(trim.checked){servicesStorage.push(`Beard and Mustache Trim`)
            prices.push(trimPrice)}
            if(shave.checked){servicesStorage.push(`Hot Lather Shave`)
            prices.push(shavePrice)}
            if(facial.checked){servicesStorage.push(`Facial`)
            prices.push(facialPrice)}
            if(kidCut.checked){servicesStorage.push(`Kid's Haircut`)
            prices.push(kidCutPrice)}
            if(design.checked){servicesStorage.push(`Custom Design`)
            prices.push(designPrice)}
            if(coloring.checked){servicesStorage.push(`Coloring`)
            prices.push(coloringPrice)}
            if(braiding.checked){servicesStorage.push(`Braiding`)
            prices.push(braidingPrice)}
            sessionStorage.setItem('services', servicesStorage)
            sessionStorage.setItem('price', prices)
            if(anyone.checked){sessionStorage.setItem('staff', "Any Staff Member")
            apptDetails.staff = "Any Staff Member"}
            if(billyBob.checked){sessionStorage.setItem('staff', "Billy Bob")
            apptDetails.staff = "Billy Bob"}
            if(tMoney.checked){sessionStorage.setItem('staff', "T Money")
            apptDetails.staff = "T Money"}
            if(william.checked){sessionStorage.setItem('staff', "William")
            apptDetails.staff = "William"}
            if(harold.checked){sessionStorage.setItem('staff', "Harold")
            apptDetails.staff = "Harold"}
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            backBtn.style.display = 'inline';
            window.scrollTo(0,0);
            break;
        case 2:
            //Add date and time to storage
            if(time.contains(tueFriList)){
                if(document.getElementById('700a').checked){sessionStorage.setItem('time', `7:00 AM`)
                apptDetails.time = "7:00 AM"}
                if(document.getElementById('730a').checked){sessionStorage.setItem('time', `7:30 AM`)
                apptDetails.time = "7:30 AM"}
                if(document.getElementById('800a').checked){sessionStorage.setItem('time', `8:00 AM`)
                apptDetails.time = "8:00 AM"}
                if(document.getElementById('830a').checked){sessionStorage.setItem('time', `8:30 AM`)
                apptDetails.time = "8:30 AM"}
            }
            
            if(document.getElementById('900a').checked){sessionStorage.setItem('time', `9:00 AM`)
            apptDetails.time = "9:00 AM"}
            if(document.getElementById('930a').checked){sessionStorage.setItem('time', `9:30 AM`)
            apptDetails.time = "9:30 AM"}
            if(document.getElementById('1000a').checked){sessionStorage.setItem('time', `10:00 AM`)
            apptDetails.time = "10:00 AM"}
            if(document.getElementById('1030a').checked){sessionStorage.setItem('time', `10:30 AM`)
            apptDetails.time = "10:30 AM"}
            if(document.getElementById('1100a').checked){sessionStorage.setItem('time', `11:00 AM`)
            apptDetails.time = "11:00 AM"}
            if(document.getElementById('1130a').checked){sessionStorage.setItem('time', `11:30 AM`)
            apptDetails.time = "11:30 AM"}
            if(document.getElementById('1200p').checked){sessionStorage.setItem('time', `12:00 PM`)
            apptDetails.time = "12:00 PM"}
            if(document.getElementById('1230p').checked){sessionStorage.setItem('time', `12:30 PM`)
            apptDetails.time = "12:30 PM"}
            if(document.getElementById('100p').checked){sessionStorage.setItem('time', `1:00 PM`)
            apptDetails.time = "1:00 PM"}
            if(document.getElementById('130p').checked){sessionStorage.setItem('time', `1:30 PM`)
            apptDetails.time = "1:30 PM"}
            if(document.getElementById('200p').checked){sessionStorage.setItem('time', `2:00 PM`)
            apptDetails.time = "2:00 PM"}
            if(document.getElementById('230p').checked){sessionStorage.setItem('time', `2:30 PM`)
            apptDetails.time = "2:30 PM"}
            if(document.getElementById('300p').checked){sessionStorage.setItem('time', `3:00 PM`)
            apptDetails.time = "3:00 PM"}
            if(document.getElementById('330p').checked){sessionStorage.setItem('time', `3:30 PM`)
            apptDetails.time = "3:30 PM"}
            if(document.getElementById('400p').checked){sessionStorage.setItem('time', `4:00 PM`)
            apptDetails.time = "4:00 PM"}
            if(document.getElementById('430p').checked){sessionStorage.setItem('time', `4:30 PM`)
            apptDetails.time = "4:30 PM"}
            if(document.getElementById('500p').checked){sessionStorage.setItem('time', `5:00 PM`)
            apptDetails.time = "5:00 PM"}
            if(document.getElementById('530p').checked){sessionStorage.setItem('time', `5:30 PM`)
            apptDetails.time = "5:30 PM"}
            if(document.getElementById('600p').checked){sessionStorage.setItem('time', `6:00 PM`)
            apptDetails.time = "6:00 PM"}
            if(document.getElementById('630p').checked){sessionStorage.setItem('time', `6:30 PM`)
            apptDetails.time = "6:30 PM"}
            sessionStorage.setItem('date', dateControl.valueAsDate.toUTCString().slice(0, 16))
            apptDetails.date = dateControl.valueAsDate.toUTCString().slice(0, 16)
            //Total
            apptDetails.total = prices.reduce((sum, price) => sum + price, 0)
            //Display appointment details
            apptDetailsContainer.innerHTML =
            `<h2>Appointment Details</h2>
            <ul class="detailsList">
                <li id="apptServices"><h3>Service</h3>${apptDetails.services}</li>
                <li id="apptBarber"><h3>Staff</h3>${apptDetails.staff}</li>
                <li id="apptDate"><h3>Date</h3>${apptDetails.date}</li>
                <li id="apptTime"><h3>Time</h3>${apptDetails.time}</li>
                <li id= "total"><h3><b>Total</b></h3>$${apptDetails.total}</li>
            </ul>
            <i>*There is a $15 fee for appointments cancelled in less than 24 hours of their scheduled time</i>`
            apptInfoSection.appendChild(apptDetailsContainer)
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            console.log('page3')
            window.scrollTo(0,0)
            break;
        case 3:
            paySection.appendChild(apptDetailsContainer)
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            console.log('page4')
            window.scrollTo(0,0)
            break;
        case 4:
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            continueBtn.style.display = 'none';            
            backBtn.style.display = 'none';
            sessionStorage.removeItem('services')        
            sessionStorage.removeItem('staff')        
            sessionStorage.removeItem('date')        
            sessionStorage.removeItem('time')        
            sessionStorage.removeItem('price')
            document.getElementById('confirmEmail').textContent = contactEmail.value
            window.scrollTo(0,0)       
            break;
    }
})

backBtn.addEventListener('click', () =>{
    if(i < 5 && i > -2){
        i--
    }
    console.log(i)
    console.log(pages[i])
    switch(i){
        case 4:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            continueBtn.style.display = 'inline';
            break;
        case 3:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            break;
        case 2:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            apptInfoSection.appendChild(apptDetailsContainer)
            break;
        case 1:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            sessionStorage.removeItem('date')
            sessionStorage.removeItem('time')
            break;
        case 0:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            sessionStorage.removeItem('services')
            sessionStorage.removeItem('staff')
            sessionStorage.removeItem('price')
            servicesStorage = []
            prices = []
            backBtn.style.display = 'none';
            break;
    }
    
})

//Links to Schedule Appointment
let refer = sessionStorage.getItem('refer')
if(refer !== null){
    window.addEventListener('load', () =>{
        document.getElementById(refer).checked = true
    })
}

//Date Picker
const date = new Date()
const dateControl = document.querySelector('input[type="date"]')
let todaysDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
dateControl.min = todaysDate
const time = document.querySelector('.time')

let chosenDate;
dateControl.addEventListener('input', () =>{
    tueFriList.querySelectorAll('input').forEach(input => {
        input.checked = false
    })
    satList.querySelectorAll('input').forEach(input => {
        input.checked = false
    })
    continueBtn.style.display = 'none'
    chosenDate = dateControl.valueAsDate;
    console.log(chosenDate.getDay())
    if(chosenDate.getDay() === 6 || chosenDate.getDay() === 0){
        //Display "Closed on selected date"
        if(time.contains(tueFriList)){
            time.removeChild(tueFriList)
        } else if(time.contains(satList)){
            time.removeChild(satList)
        }
            time.appendChild(sunMonList)
            console.log('Closed')
        
    } else if(chosenDate.getDay() === 5){
        //Display times for saturday
        if(time.contains(sunMonList)){
            time.removeChild(sunMonList)
        } else if(time.contains(tueFriList)){
            time.removeChild(tueFriList)
        }
            time.appendChild(satList)
            console.log('9am-7pm')
    } else{
        //Display times for tuesday-friday
        if(time.contains(sunMonList)){
            time.removeChild(sunMonList)
        } else if(time.contains(satList)){
            time.removeChild(satList)
        }
            time.appendChild(tueFriList)
            console.log('7am-7pm')
    }
})


const tueFriList = document.createElement('div')
tueFriList.innerHTML = 
`<div class="time-title">
<h1>Pick A Time</h1>
</div>
<input type="radio" name="time" id="700a">
<label for="700a">7:00 AM</label>
<input type="radio" name="time" id="730a">
<label for="730a">7:30 AM</label>
<input type="radio" name="time" id="800a">
<label for="800a">8:00 AM</label>
<input type="radio" name="time" id="830a">
<label for="830a">8:30 AM</label>
<input type="radio" name="time" id="900a">
<label for="900a">9:00 AM</label>
<input type="radio" name="time" id="930a">
<label for="930a">9:30 AM</label>
<input type="radio" name="time" id="1000a">
<label for="1000a">10:00 AM</label>
<input type="radio" name="time" id="1030a">
<label for="1030a">10:30 AM</label>
<input type="radio" name="time" id="1100a">
<label for="1100a">11:00 AM</label>
<input type="radio" name="time" id="1130a">
<label for="1130a">11:30 AM</label>
<input type="radio" name="time" id="1200p">
<label for="1200p">12:00 PM</label>
<input type="radio" name="time" id="1230p">
<label for="1230p">12:30 PM</label>
<input type="radio" name="time" id="100p">
<label for="100p">1:00 PM</label>
<input type="radio" name="time" id="130p">
<label for="130p">1:30 PM</label>
<input type="radio" name="time" id="200p">
<label for="200p">2:00 PM</label>
<input type="radio" name="time" id="230p">
<label for="230p">2:30 PM</label>
<input type="radio" name="time" id="300p">
<label for="300p">3:00 PM</label>
<input type="radio" name="time" id="330p">
<label for="330p">3:30 PM</label>
<input type="radio" name="time" id="400p">
<label for="400p">4:00 PM</label>
<input type="radio" name="time" id="430p">
<label for="430p">4:30 PM</label>
<input type="radio" name="time" id="500p">
<label for="500p">5:00 PM</label>
<input type="radio" name="time" id="530p">
<label for="530p">5:30 PM</label>
<input type="radio" name="time" id="600p">
<label for="600p">6:00 PM</label>
<input type="radio" name="time" id="630p">
<label for="630p">6:30 PM</label>`

tueFriList.classList.add('time-list')
tueFriList.id = 'tueFriList'


const satList = document.createElement('div')
satList.innerHTML = 
`<div class="time-title">
<h1>Pick A Time</h1>
</div>
<input type="radio" name="time" id="900a">
<label for="900a">9:00 AM</label>
<input type="radio" name="time" id="930a">
<label for="930a">9:30 AM</label>
<input type="radio" name="time" id="1000a">
<label for="1000a">10:00 AM</label>
<input type="radio" name="time" id="1030a">
<label for="1030a">10:30 AM</label>
<input type="radio" name="time" id="1100a">
<label for="1100a">11:00 AM</label>
<input type="radio" name="time" id="1130a">
<label for="1130a">11:30 AM</label>
<input type="radio" name="time" id="1200p">
<label for="1200p">12:00 PM</label>
<input type="radio" name="time" id="1230p">
<label for="1230p">12:30 PM</label>
<input type="radio" name="time" id="100p">
<label for="100p">1:00 PM</label>
<input type="radio" name="time" id="130p">
<label for="130p">1:30 PM</label>
<input type="radio" name="time" id="200p">
<label for="200p">2:00 PM</label>
<input type="radio" name="time" id="230p">
<label for="230p">2:30 PM</label>
<input type="radio" name="time" id="300p">
<label for="300p">3:00 PM</label>
<input type="radio" name="time" id="330p">
<label for="330p">3:30 PM</label>
<input type="radio" name="time" id="400p">
<label for="400p">4:00 PM</label>
<input type="radio" name="time" id="430p">
<label for="430p">4:30 PM</label>
<input type="radio" name="time" id="500p">
<label for="500p">5:00 PM</label>
<input type="radio" name="time" id="530p">
<label for="530p">5:30 PM</label>
<input type="radio" name="time" id="600p">
<label for="600p">6:00 PM</label>
<input type="radio" name="time" id="630p">
<label for="630p">6:30 PM</label>`

satList.classList.add('time-list')
satList.id = 'satList'

const sunMonList = document.createElement('div')
sunMonList.id = 'sunMonList'
sunMonList.innerHTML = 
`<h2>Closed on selected date</h2>`
tueFriList.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () =>{
        if((dateControl.valueAsNumber + 86400000) > date.getTime()){
            continueBtn.style.display = 'inline'
        }else{
            console.log('not working')
        }
        
    })
})
satList.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () =>{
        if((dateControl.valueAsNumber + 86400000) > date.getTime()){
            continueBtn.style.display = 'inline'
        }else{
            console.log('not working')
        }
    })
})
//Contact Info/Appointment Details
const contactName = document.getElementById('name')
const contactEmail = document.getElementById('email')
const contactPhone = document.getElementById('phone')
contactName.addEventListener('input', () =>{
    if(contactName.value !== '' && contactEmail.value !== '' && contactPhone.value !== ''){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
contactEmail.addEventListener('input', () =>{
    if(contactName.value !== '' && contactEmail.value !== '' && contactPhone.value !== ''){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
contactPhone.addEventListener('input', () =>{
    if(contactName.value !== '' && contactEmail.value !== '' && contactPhone.value !== ''){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})


//Payment Method
const payMethod = document.querySelectorAll('.method')
const payDetails = document.querySelectorAll('.payDetails')
const methodLabels = document.querySelectorAll('.methodLabel')
const cardLabel = document.getElementById('cardLabel')
const appleLabel = document.getElementById('appleLabel')
const googleLabel = document.getElementById('googleLabel')
const paypalLabel = document.getElementById('paypalLabel')
//Card Details
const noc = document.getElementById('noc')
const cardNumber = document.getElementById('cardNumber')
const cardMonth = document.getElementById('cardMonth')
const cardYear = document.getElementById('cardYear')
const cvv = document.getElementById('cvv')
//Paypal
const paypalEmail = document.getElementById('paypalemail')
const paypalPwd = document.getElementById('paypalpwd')
//Apple Pay
const appleEmail = document.getElementById('appleemail')
const applePwd = document.getElementById('applepwd')
//Google Pay
const googleEmail = document.getElementById('googleemail')
const googlePwd = document.getElementById('googlepwd')

//Accordion & clearing inputs on close
cardLabel.addEventListener('click', () =>{
    continueBtn.style.display = 'none'
    if(cardLabel.nextElementSibling.classList.contains('payDetailsShow')){
        cardLabel.nextElementSibling.classList.remove('payDetailsShow')
        cardLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        cardLabel.classList.remove('selectedLabel')
    } else{
        cardLabel.nextElementSibling.classList.add('payDetailsShow')
        paypalLabel.nextElementSibling.classList.remove('payDetailsShow')
        googleLabel.nextElementSibling.classList.remove('payDetailsShow')
        appleLabel.nextElementSibling.classList.remove('payDetailsShow')
        paypalLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        googleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        appleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        cardLabel.classList.add('selectedLabel')
        paypalLabel.classList.remove('selectedLabel')
        appleLabel.classList.remove('selectedLabel')
        googleLabel.classList.remove('selectedLabel')
    }
})
paypalLabel.addEventListener('click', () =>{
    continueBtn.style.display = 'none'
    if(paypalLabel.nextElementSibling.classList.contains('payDetailsShow')){
        paypalLabel.nextElementSibling.classList.remove('payDetailsShow')
        paypalLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        paypalLabel.classList.remove('selectedLabel')
        
    } else{
        paypalLabel.nextElementSibling.classList.add('payDetailsShow')
        cardLabel.nextElementSibling.classList.remove('payDetailsShow')
        googleLabel.nextElementSibling.classList.remove('payDetailsShow')
        appleLabel.nextElementSibling.classList.remove('payDetailsShow')
        cardLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        googleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        appleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        paypalLabel.classList.add('selectedLabel')
        cardLabel.classList.remove('selectedLabel')
        appleLabel.classList.remove('selectedLabel')
        googleLabel.classList.remove('selectedLabel')
    }
})
appleLabel.addEventListener('click', () =>{
    continueBtn.style.display = 'none'
    if(appleLabel.nextElementSibling.classList.contains('payDetailsShow')){
        appleLabel.nextElementSibling.classList.remove('payDetailsShow')
        appleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        appleLabel.classList.remove('selectedLabel')
        
    } else{
        appleLabel.nextElementSibling.classList.add('payDetailsShow')
        paypalLabel.nextElementSibling.classList.remove('payDetailsShow')
        googleLabel.nextElementSibling.classList.remove('payDetailsShow')
        cardLabel.nextElementSibling.classList.remove('payDetailsShow')
        cardLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        paypalLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        googleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        appleLabel.classList.add('selectedLabel')
        cardLabel.classList.remove('selectedLabel')
        paypalLabel.classList.remove('selectedLabel')
        googleLabel.classList.remove('selectedLabel')
    }
})
googleLabel.addEventListener('click', () =>{
    continueBtn.style.display = 'none'
    if(googleLabel.nextElementSibling.classList.contains('payDetailsShow')){
        googleLabel.nextElementSibling.classList.remove('payDetailsShow')
        googleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        googleLabel.classList.remove('selectedLabel')
        
    } else{
        googleLabel.nextElementSibling.classList.add('payDetailsShow')
        paypalLabel.nextElementSibling.classList.remove('payDetailsShow')
        cardLabel.nextElementSibling.classList.remove('payDetailsShow')
        appleLabel.nextElementSibling.classList.remove('payDetailsShow')
        cardLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        paypalLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        appleLabel.nextElementSibling.childNodes.forEach(input => {
            input.value = null;
        })
        googleLabel.classList.add('selectedLabel')
        cardLabel.classList.remove('selectedLabel')
        paypalLabel.classList.remove('selectedLabel')
        appleLabel.classList.remove('selectedLabel')
    }
})

//Continue Button
noc.addEventListener('input', () =>{
    if(noc.value !== "" && cardNumber.value !== "" && cardMonth.value !== "" && cardYear.value !== "" && cvv.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
cardNumber.addEventListener('input', () =>{
    if(noc.value !== "" && cardNumber.value !== "" && cardMonth.value !== "" && cardYear.value !== "" && cvv.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
cardMonth.addEventListener('input', () =>{
    if(noc.value !== "" && cardNumber.value !== "" && cardMonth.value !== "" && cardYear.value !== "" && cvv.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
cardYear.addEventListener('input', () =>{
    if(noc.value !== "" && cardNumber.value !== "" && cardMonth.value !== "" && cardYear.value !== "" && cvv.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
cvv.addEventListener('input', () =>{
    if(noc.value !== "" && cardNumber.value !== "" && cardMonth.value !== "" && cardYear.value !== "" && cvv.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
paypalEmail.addEventListener('input', () =>{
    if(paypalEmail.value !== "" && paypalPwd.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
paypalPwd.addEventListener('input', () =>{
    if(paypalEmail.value !== "" && paypalPwd.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
appleEmail.addEventListener('input', () =>{
    if(appleEmail.value !== "" && applePwd.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
applePwd.addEventListener('input', () =>{
    if(appleEmail.value !== "" && applePwd.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
googleEmail.addEventListener('input', () =>{
    if(googleEmail.value !== "" && googlePwd.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})
googlePwd.addEventListener('input', () =>{
    if(googleEmail.value !== "" && googlePwd.value !== ""){
        continueBtn.style.display = 'inline'
    } else{
        continueBtn.style.display = 'none'
    }
})



//Services & Staff
const serviceInputs = document.querySelectorAll('[name="services"]')
const staff = document.querySelectorAll('[name="staff"]')

serviceInputs.forEach(input => {
    input.addEventListener('input', () =>{
        if(input.checked && document.getElementById('anyone').checked || 
        document.getElementById('billyBob').checked ||
        document.getElementById('tMoney').checked ||
        document.getElementById('william').checked ||
        document.getElementById('harold').checked){
            continueBtn.style.display = 'inline'
        }
        else{
            continueBtn.style.display = 'none'
        }
    })
})

staff.forEach(input => {
    input.addEventListener('input', () =>{
        if(document.getElementById('adultCut').checked || 
        document.getElementById('trim').checked ||
        document.getElementById('shave').checked ||
        document.getElementById('facial').checked ||
        document.getElementById('kidCut').checked ||
        document.getElementById('design').checked ||
        document.getElementById('coloring').checked ||
        document.getElementById('braiding').checked){
            continueBtn.style.display = 'inline'
        } else{
            continueBtn.style.display = 'none'
        }
    })
})
