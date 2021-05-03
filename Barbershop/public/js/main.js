//Side Nav
const burger = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const smallScreenNav = document.querySelector('.small-screen-nav');

burger.addEventListener('click', () =>{
    nav.classList.toggle('open')
    if(nav.classList.contains('open')){
        burger.innerHTML = '<i class="fas fa-times fa-3x"></i>'
    } else{
        burger.innerHTML = '<i class="fas fa-bars fa-3x"></i>'
    }
})
//Modal
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modalCloseBtn')
const modalSignup = document.getElementById('modalSignup')
const modalContent = document.getElementById('modalContent')
const modalEmail = document.getElementById('modalEmail')

setTimeout(() =>{
    if(sessionStorage.getItem('modalSeen') == null){
        modal.style.display = 'block'
        modalContent.classList.add('modalFadeIn')
        document.body.style.overflow = 'hidden'
    }
    
}, 8000)

modalCloseBtn.addEventListener('click', () =>{
    modal.style.display = 'none'
    modalContent.classList.remove('modalFadeIn')
    document.body.style.overflow = ''
    sessionStorage.setItem('modalSeen', true)
})
modalSignup.addEventListener('click', () =>{
    if(modalEmail.value !== ''){
        modal.style.display = 'none'
        modalContent.classList.remove('modalFadeIn')
        document.body.style.overflow = ''
        sessionStorage.setItem('modalSeen', true)
    }
})