new Splide('.splide').mount();

new Splide('.splide1').mount();

var splide = new Splide('.splide1', {
    type: 'loop',
    perPage: 4,
    breakpoints: {
        768: {
            perPage: 1,
        }
    }
});

// burger menu

let menu = document.querySelector('.main-info-block__menu')
let cross = document.querySelector('.main-info-block__cross')
let burger = document.querySelector('.menu__burger')

burger.addEventListener('click', () => {
    menu.style.display = 'flex'
    setTimeout(()=>{
        menu.style.left = '50%'
    },0)
})

cross.addEventListener('click', () => {
    menu.style.left = '170%'
    setTimeout(()=>{
        menu.style.display = 'none'
    },500)
})




