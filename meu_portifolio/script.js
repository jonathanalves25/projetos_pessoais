const toggle = document.querySelector('.toggle');
const banner = document.querySelector('.banner');
const menu = document.querySelectorAll('.menu a[href^="#"]')
const footer = document.querySelector('.contato')
const habil = document.querySelector('.habilidades')
const services = document.querySelector('.services')

toggle.onclick = function() {
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
    services.classList.toggle('active');
    habil.classList.toggle('active');
    footer.classList.toggle('active');
}



menu.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    toggle.classList.toggle('active');
    banner.classList.toggle('active');
    services.classList.toggle('active');
    habil.classList.toggle('active');
    footer.classList.toggle('active');
    const element = event.target;
    const id = element.getAttribute('href').settime;
    const to = document.querySelector(id).offsetTop; 
        window.scroll ({
            top: to,
            behavior:"smooth",
        });
    
}

function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function decidirBotao() {
    let btnScroll = document.querySelector('.btnScroll');

    if(window.scrollY === 0) {
        btnScroll.style.display = "none";
    } else {
        btnScroll.style.display = "block";
    }
}

window.addEventListener('scroll', decidirBotao);