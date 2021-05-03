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

const serviceGrid = document.querySelector('.services-grid')
    const serviceLinks = serviceGrid.querySelectorAll('a')
    serviceLinks.forEach(link =>{
        link.addEventListener('click', () =>{
            sessionStorage.setItem('refer', link.id)
        })
    })