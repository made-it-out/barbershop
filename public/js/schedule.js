window.addEventListener('load', () => {
    sessionStorage.removeItem('services')
    sessionStorage.removeItem('price')
    sessionStorage.removeItem('staff')
    sessionStorage.removeItem('date')
    sessionStorage.removeItem('time')
    sessionStorage.removeItem('contactName')
    sessionStorage.removeItem('contactEmail')
    sessionStorage.removeItem('contactPhone')
    window.scrollTo(0, 0);
})
window.addEventListener('unload', () => {
    sessionStorage.removeItem('refer')
})

//Side Nav
const burger = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const smallScreenNav = document.querySelector('.small-screen-nav');
const smallScreenNavLogo = document.querySelector('.small-screen-nav a')

burger.addEventListener('click', () => {
    nav.classList.toggle('open')
    if (nav.classList.contains('open')) {
        burger.innerHTML = '<i class="fas fa-times fa-3x"></i>'
        smallScreenNavLogo.style.display = 'none'
    } else {
        burger.innerHTML = '<i class="fas fa-bars fa-3x"></i>'
        smallScreenNavLogo.style.display = 'block'
    }
})

//Sections
const sectionWrap = document.querySelector('#sectionWrap');
const serviceAndStaff = document.querySelector('.serviceAndStaff');
const apptForm = document.getElementById('apptForm');
const dateSection = document.querySelector('.dateAndTime');
const apptInfoSection = document.querySelector('#apptInfo');
const paySection = document.querySelector('#payment');

const continueBtn = document.querySelector('#continueBtn');
const backBtn = document.querySelector('#backBtn');
const submitBtn = document.querySelector('#submitBtn');

const pages = [serviceAndStaff, dateSection, apptInfoSection];
//Services
let servicesStorage = [];
const adultCut = document.getElementById('adultCut');
const trim = document.getElementById('trim');
const shave = document.getElementById('shave');
const facial = document.getElementById('facial');
const kidCut = document.getElementById('kidCut');
const design = document.getElementById('design');
const coloring = document.getElementById('coloring');
const braiding = document.getElementById('braiding');
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
continueBtn.addEventListener('click', () => {
    continueBtn.style.display = 'none'
    if (i < 4 && i > -2) {
        i++
    } switch (i) {
        case 1:
            //Add services, prices, & barber to storage
            if (adultCut.checked) {
                servicesStorage.push(`Adult's Haircut`)
                prices.push(adultCutPrice)
            }
            if (trim.checked) {
                servicesStorage.push(`Beard and Mustache Trim`)
                prices.push(trimPrice)
            }
            if (shave.checked) {
                servicesStorage.push(`Hot Lather Shave`)
                prices.push(shavePrice)
            }
            if (facial.checked) {
                servicesStorage.push(`Facial`)
                prices.push(facialPrice)
            }
            if (kidCut.checked) {
                servicesStorage.push(`Kid's Haircut`)
                prices.push(kidCutPrice)
            }
            if (design.checked) {
                servicesStorage.push(`Custom Design`)
                prices.push(designPrice)
            }
            if (coloring.checked) {
                servicesStorage.push(`Coloring`)
                prices.push(coloringPrice)
            }
            if (braiding.checked) {
                servicesStorage.push(`Braiding`)
                prices.push(braidingPrice)
            }
            sessionStorage.setItem('services', servicesStorage)
            sessionStorage.setItem('price', prices)
            if (anyone.checked) {
                sessionStorage.setItem('staff', "Any%20Staff%20Member")
                apptDetails.staff = "Any Staff Member"
            }
            if (billyBob.checked) {
                sessionStorage.setItem('staff', "Billy%20Bob")
                apptDetails.staff = "Billy Bob"
            }
            if (tMoney.checked) {
                sessionStorage.setItem('staff', "T%20Money")
                apptDetails.staff = "T Money"
            }
            if (william.checked) {
                sessionStorage.setItem('staff', "William")
                apptDetails.staff = "William"
            }
            if (harold.checked) {
                sessionStorage.setItem('staff', "Harold")
                apptDetails.staff = "Harold"
            }
            dateControl.value = null;
            availableTimes.textContent = '';
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            backBtn.style.display = 'inline';
            window.scrollTo(0, 0);
            break;
        case 2:
            //Add date and time to storage
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
            apptInfoSection.prepend(apptDetailsContainer)
            pages[i].classList.add('pageShow');
            pages[i - 1].classList.remove('pageShow');
            window.scrollTo(0, 0)
            break;
    }
})
apptForm.addEventListener('submit', (e) => {
    sessionStorage.removeItem('services');
    sessionStorage.removeItem('staff');
    sessionStorage.removeItem('date');
    sessionStorage.removeItem('time');
    sessionStorage.removeItem('price');
    sessionStorage.removeItem('contactName');
    sessionStorage.removeItem('contactEmail');
    sessionStorage.removeItem('contactPhone');
    document.getElementById('confirmEmail').textContent = contactEmail.value;
})

backBtn.addEventListener('click', () => {
    if (i < 5 && i > -2) {
        i--
    }
    console.log(i)
    console.log(pages[i])
    switch (i) {
        case 4:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            continueBtn.style.display = 'inline';
            window.scrollTo(0, 0);
            break;
        case 3:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            window.scrollTo(0, 0);
            break;
        case 2:
            pages[i + 1].classList.remove('pageShow');
            pages[i].classList.add('pageShow');
            window.scrollTo(0, 0);
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
            window.scrollTo(0, 0);
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
            window.scrollTo(0, 0);
            break;
    }

})

//Links to Schedule Appointment
let refer = sessionStorage.getItem('refer')
if (refer !== null) {
    window.addEventListener('load', () => {
        document.getElementById(refer).checked = true
    })
}
//Services & Staff
const serviceInputs = document.querySelectorAll('[name="services"]')
const staff = document.querySelectorAll('[name="staff"]')

serviceInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.checked && document.getElementById('anyone').checked ||
            document.getElementById('billyBob').checked ||
            document.getElementById('tMoney').checked ||
            document.getElementById('william').checked ||
            document.getElementById('harold').checked) {
            continueBtn.style.display = 'inline'
        }
        else {
            continueBtn.style.display = 'none'
        }
    })
})

staff.forEach(input => {
    input.addEventListener('input', () => {
        if (document.getElementById('adultCut').checked ||
            document.getElementById('trim').checked ||
            document.getElementById('shave').checked ||
            document.getElementById('facial').checked ||
            document.getElementById('kidCut').checked ||
            document.getElementById('design').checked ||
            document.getElementById('coloring').checked ||
            document.getElementById('braiding').checked) {
            continueBtn.style.display = 'inline'
        } else {
            continueBtn.style.display = 'none'
        }
    })
})

//Date Picker
const date = new Date();
const dateControl = document.querySelector('input[type="date"]');
let todaysDate = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
dateControl.min = todaysDate;
const time = document.querySelector('.time');
const tueFriTimes = [
    '7:00a', '7:30a',
    '8:00a', '8:30a',
    '9:00a', '9:30a',
    '10:00a', '10:30a',
    '11:00a', '11:30a',
    '12:00p', '12:30p',
    '1:00p', '1:30p',
    '2:00p', '2:30p',
    '3:00p', '3:30p',
    '4:00p', '4:30p',
    '5:00p', '5:30p',
    '6:00p', '6:30p'
];
const satTimes = [
    '9:00a', '9:30a',
    '10:00a', '10:30a',
    '11:00a', '11:30a',
    '12:00p', '12:30p',
    '1:00p', '1:30p',
    '2:00p', '2:30p',
    '3:00p', '3:30p',
    '4:00p', '4:30p',
    '5:00p', '5:30p',
    '6:00p', '6:30p'
];
const sunMonTimes = [
    'Closed on selected date'
];
let available;
let taken;
let availableTimes = document.createElement('div');
availableTimes.classList.add('time-list');
time.append(availableTimes);

//Event listener for date input
dateControl.addEventListener('input', () => {
    continueBtn.style.display = 'none';
    //Temp Date set when date is picked
    sessionStorage.setItem('date', dateControl.value);

    //Make request to database to see what times are already taken by that staff member
    fetch(`/schedule/${sessionStorage.getItem('staff')}/${sessionStorage.getItem('date')}`, {
        method: 'GET'
    })
        .then(result => result.json())
        .then(data => {
            taken = data;
            console.log(taken);
            //set available times to nothing
            availableTimes.textContent = '';
            //if date is sunday/monday
            if (dateControl.valueAsDate.getDay() === 6 || dateControl.valueAsDate.getDay() === 0) {
                //set available = to a copy of sun/mon list
                available = sunMonTimes.slice();
                //for every time in taken array, see if available includes the time, then remove that time from available
                taken.forEach(slot => {
                    if (available.includes(slot)) {
                        available.splice(available.indexOf(slot), 1)
                    }
                })
                //add the times in the available array to the available times div
                available.forEach(time => {
                    let closedNode = document.createElement('h2');
                    closedNode.innerHTML = `${time}`;
                    availableTimes.append(closedNode);
                });
            }
            //saturday
            else if (dateControl.valueAsDate.getDay() === 5) {
                //Title for time
                let timeTitle = document.createElement('div');
                timeTitle.classList.add('time-title');
                timeTitle.innerHTML = `<h3>Pick A Time</h3>`;
                availableTimes.prepend(timeTitle);

                available = satTimes.slice();
                taken.forEach(slot => {
                    if (available.includes(slot)) {
                        available.splice(available.indexOf(slot), 1)
                    }
                })
                available.forEach(time => {
                    //create input and label for each time
                    let inputNode = document.createElement('input');
                    let labelNode = document.createElement('label');
                    inputNode.type = 'radio';
                    inputNode.name = 'time';
                    inputNode.id = `${time}`;
                    inputNode.value = `${time}`;
                    labelNode.htmlFor = `${time}`;
                    labelNode.innerHTML = `${time}`
                    availableTimes.append(inputNode);
                    availableTimes.append(labelNode);
                    inputNode.addEventListener('input', () => {
                        if ((dateControl.valueAsNumber + 86400000) > date.getTime()) {
                            sessionStorage.setItem('time', inputNode.id);
                            apptDetails.time = inputNode.id;
                            continueBtn.style.display = 'inline';
                        } else {
                            console.log('not working');
                        }
                    })
                });
            }
            //tue-fri
            else {
                let timeTitle = document.createElement('div');
                timeTitle.classList.add('time-title');
                timeTitle.innerHTML = `<h3>Pick A Time</h3>`;
                availableTimes.prepend(timeTitle);
                available = tueFriTimes.slice();
                taken.forEach(slot => {
                    if (available.includes(slot)) {
                        available.splice(available.indexOf(slot), 1)
                    }
                })
                available.forEach(time => {
                    //create input and label for each time
                    let inputNode = document.createElement('input');
                    let labelNode = document.createElement('label');
                    inputNode.type = 'radio';
                    inputNode.name = 'time';
                    inputNode.id = `${time}`;
                    inputNode.value = `${time}`;
                    labelNode.htmlFor = `${time}`;
                    labelNode.innerHTML = `${time}`
                    availableTimes.append(inputNode);
                    availableTimes.append(labelNode);
                    inputNode.addEventListener('input', () => {
                        if ((dateControl.valueAsNumber + 86400000) > date.getTime()) {
                            sessionStorage.setItem('time', inputNode.id);
                            apptDetails.time = inputNode.id;
                            continueBtn.style.display = 'inline';
                        } else {
                            console.log('not working');
                        }
                    })
                });
            }
        })
        .catch(err => console.log(err));
});

availableTimes.querySelectorAll('input').forEach(input => {
    input.checked = false;
});

//Contact Info/Appointment Details
const contactName = document.getElementById('name');
const contactEmail = document.getElementById('email');
const contactPhone = document.getElementById('phone');
contactName.addEventListener('input', () => {
    sessionStorage.setItem('contactName', contactName.value);
    if (contactName.value !== '' && (contactEmail.value !== '' && contactEmail.value.includes('@')) && contactPhone.value !== '') {
        paySection.style.display = 'block'
    } else {
        paySection.style.display = 'none'
    }
});
contactEmail.addEventListener('input', () => {
    sessionStorage.setItem('contactEmail', contactEmail.value);
    if (contactName.value !== '' && (contactEmail.value !== '' && contactEmail.value.includes('@')) && contactPhone.value !== '') {
        paySection.style.display = 'block'
    } else {
        paySection.style.display = 'none'
    }
});
contactPhone.addEventListener('input', () => {
    sessionStorage.setItem('contactPhone', contactPhone.value);
    if (contactName.value !== '' && (contactEmail.value !== '' && contactEmail.value.includes('@')) && contactPhone.value !== '') {
        paySection.style.display = 'block'
    } else {
        paySection.style.display = 'none'
    }
});



//paypal
paypal.Buttons({
    style: {
        shape: 'pill'
    },
    createOrder: function (data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: apptDetails.total.toString()
                }
            }]
        });
    },
    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
            submitBtn.style.display = 'inline';
        });
    }
}).render('#paypal-button-container');