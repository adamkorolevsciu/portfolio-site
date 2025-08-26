window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add('display')
    },4000);
}

const menu = document.querySelector('.hamburger-menu')
const container = document.querySelector('.container')

menu.addEventListener('click', () => {
    container.classList.toggle('change')
})

// scroll smooth effect
const scrollBtn = document.querySelector('.scroll-btn')
const ht = document.querySelector('html')

scrollBtn.addEventListener('click', () => {
    ht.style.scrollBehavior = "smooth";
    setTimeout(()=>{
        ht.style.scrollBehavior = 'unset'
    },1000)
})