window.addEventListener('load',() =>{
    sessionStorage.removeItem('services')
    sessionStorage.removeItem('price')
    sessionStorage.removeItem('staff')
    sessionStorage.removeItem('date')
    sessionStorage.removeItem('time')
    sessionStorage.removeItem('contactName')
    sessionStorage.removeItem('contactEmail')
    sessionStorage.removeItem('contactPhone')
})
window.addEventListener('unload', () =>{
    sessionStorage.removeItem('refer')
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
const serviceAndStaff = document.querySelector('.serviceAndStaff')
const apptForm = document.getElementById('apptForm')
const dateSection = document.querySelector('.dateAndTime')
const apptInfoSection = document.querySelector('#apptInfo')
const paySection = document.querySelector('#payment')
const thanksSection = document.querySelector('#thanks')

const continueBtn = document.querySelector('#continueBtn')
const backBtn = document.querySelector('#backBtn')
const submitBtn = document.querySelector('#submitBtn')

const pages = [serviceAndStaff, dateSection, apptInfoSection, paySection, thanksSection]
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
const apptTotal = document.getElementById('total')
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
            apptTotal.value = apptDetails.total
            //Display appointment details
            apptDetailsContainer.innerHTML =
            `<h3>Appointment Details</h3>
            <ul class="detailsList">
                <li id="apptServices"><h4>Service</h4>${apptDetails.services}</li>
                <li id="apptBarber"><h4>Staff</h4>${apptDetails.staff}</li>
                <li id="apptDate"><h4>Date</h4>${apptDetails.date}</li>
                <li id="apptTime"><h4>Time</h4>${apptDetails.time}</li>
                <li id= "total"><h4><b>Total</b></h4>$${apptDetails.total}</li>
            </ul>
            <i>*There is a $15 fee for appointments cancelled less than 24 hours before their scheduled time</i>`
            apptInfoSection.appendChild(apptDetailsContainer)
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            console.log('page3')
            window.scrollTo(0,0)
            break;
        case 3:
            sessionStorage.setItem('contactName', contactName.value)
            sessionStorage.setItem('contactEmail', contactEmail.value)
            sessionStorage.setItem('contactPhone', contactPhone.value)
            paySection.appendChild(apptDetailsContainer)
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            window.scrollTo(0,0)
            break;
    }
})
apptForm.addEventListener('submit', (e)=>{
    sessionStorage.removeItem('services')        
    sessionStorage.removeItem('staff')        
    sessionStorage.removeItem('date')        
    sessionStorage.removeItem('time')        
    sessionStorage.removeItem('price')
    sessionStorage.removeItem('contactName')
    sessionStorage.removeItem('contactEmail')
    sessionStorage.removeItem('contactPhone')
    document.getElementById('confirmEmail').textContent = contactEmail.value
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
            apptInfoSection.appendChild(apptDetailsContainer);
            break;
        case 1:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            sessionStorage.removeItem('date')
            sessionStorage.removeItem('time')
            sessionStorage.removeItem('contactName')
            sessionStorage.removeItem('contactEmail')
            sessionStorage.removeItem('contactPhone')
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
<h3>Pick A Time</h3>
</div>
<input type="radio" name="time" id="700a" value="7:00a">
<label for="700a">7:00 AM</label>
<input type="radio" name="time" id="730a" value="7:30a">
<label for="730a">7:30 AM</label>
<input type="radio" name="time" id="800a" value="8:00a">
<label for="800a">8:00 AM</label>
<input type="radio" name="time" id="830a" value="8:30a">
<label for="830a">8:30 AM</label>
<input type="radio" name="time" id="900a" value="9:00a">
<label for="900a">9:00 AM</label>
<input type="radio" name="time" id="930a" value="9:30a">
<label for="930a">9:30 AM</label>
<input type="radio" name="time" id="1000a" value="10:00a">
<label for="1000a">10:00 AM</label>
<input type="radio" name="time" id="1030a" value="10:30a">
<label for="1030a">10:30 AM</label>
<input type="radio" name="time" id="1100a" value="11:00a">
<label for="1100a">11:00 AM</label>
<input type="radio" name="time" id="1130a" value="11:30a">
<label for="1130a">11:30 AM</label>
<input type="radio" name="time" id="1200p" value="12:00p">
<label for="1200p">12:00 PM</label>
<input type="radio" name="time" id="1230p" value="12:30p">
<label for="1230p">12:30 PM</label>
<input type="radio" name="time" id="100p" value="1:00p">
<label for="100p">1:00 PM</label>
<input type="radio" name="time" id="130p" value="1:30p">
<label for="130p">1:30 PM</label>
<input type="radio" name="time" id="200p" value="2:00p">
<label for="200p">2:00 PM</label>
<input type="radio" name="time" id="230p" value="2:30p">
<label for="230p">2:30 PM</label>
<input type="radio" name="time" id="300p" value="3:00p">
<label for="300p">3:00 PM</label>
<input type="radio" name="time" id="330p" value="3:30p">
<label for="330p">3:30 PM</label>
<input type="radio" name="time" id="400p" value="4:00p">
<label for="400p">4:00 PM</label>
<input type="radio" name="time" id="430p" value="4:30p">
<label for="430p">4:30 PM</label>
<input type="radio" name="time" id="500p" value="5:00p">
<label for="500p">5:00 PM</label>
<input type="radio" name="time" id="530p" value="5:30p">
<label for="530p">5:30 PM</label>
<input type="radio" name="time" id="600p" value="6:00p">
<label for="600p">6:00 PM</label>
<input type="radio" name="time" id="630p" value="6:30p">
<label for="630p">6:30 PM</label>`

tueFriList.classList.add('time-list')
tueFriList.id = 'tueFriList'


const satList = document.createElement('div')
satList.innerHTML = 
`<div class="time-title">
<h3>Pick A Time</h3>
</div>
<input type="radio" name="time" id="900a" value="9:00a">
<label for="900a">9:00 AM</label>
<input type="radio" name="time" id="930a" value="9:30a">
<label for="930a">9:30 AM</label>
<input type="radio" name="time" id="1000a" value="10:00a">
<label for="1000a">10:00 AM</label>
<input type="radio" name="time" id="1030a" value="10:30a">
<label for="1030a">10:30 AM</label>
<input type="radio" name="time" id="1100a" value="11:00a">
<label for="1100a">11:00 AM</label>
<input type="radio" name="time" id="1130a" value="11:30a">
<label for="1130a">11:30 AM</label>
<input type="radio" name="time" id="1200p" value="12:00p">
<label for="1200p">12:00 PM</label>
<input type="radio" name="time" id="1230p" value="12:30p">
<label for="1230p">12:30 PM</label>
<input type="radio" name="time" id="100p" value="1:00p">
<label for="100p">1:00 PM</label>
<input type="radio" name="time" id="130p" value="1:30p">
<label for="130p">1:30 PM</label>
<input type="radio" name="time" id="200p" value="2:00p">
<label for="200p">2:00 PM</label>
<input type="radio" name="time" id="230p" value="2:30p">
<label for="230p">2:30 PM</label>
<input type="radio" name="time" id="300p" value="3:00p">
<label for="300p">3:00 PM</label>
<input type="radio" name="time" id="330p" value="3:30p">
<label for="330p">3:30 PM</label>
<input type="radio" name="time" id="400p" value="4:00p">
<label for="400p">4:00 PM</label>
<input type="radio" name="time" id="430p" value="4:30p">
<label for="430p">4:30 PM</label>
<input type="radio" name="time" id="500p" value="5:00p">
<label for="500p">5:00 PM</label>
<input type="radio" name="time" id="530p" value="5:30p">
<label for="530p">5:30 PM</label>
<input type="radio" name="time" id="600p" value="6:00p">
<label for="600p">6:00 PM</label>
<input type="radio" name="time" id="630p" value="6:30p">
<label for="630p">6:30 PM</label>`

satList.classList.add('time-list')
satList.id = 'satList'

const sunMonList = document.createElement('div')
sunMonList.id = 'sunMonList'
sunMonList.innerHTML = 
`<h3>Closed on selected date</h3>`
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

// module.exports = apptDetails

//paypal
paypal.Buttons({
    style: {
      shape: 'pill'
    },
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: apptDetails.total.toString()
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
    apptForm.submit()
    });
  }
}).render('#paypal-button-container');