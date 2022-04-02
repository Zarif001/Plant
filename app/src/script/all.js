// Click Burger
const nav = document.querySelector('.header__content-nav'),
burger = document.querySelector('.header__content-burger'),
burgerImg = document.querySelectorAll('.header__content-img')

burger.addEventListener('click', (e) =>{
    e.preventDefault()
    nav.style = `
    left: 0px;
    top: 30px;
    transition: 0.5s;
    background: white;
    padding: 10px;
    justify-content: space-around;
    `
    burger.style = `
    display:none;
    `
})
 const burgerClick = () =>{
     burgerImg.forEach(img => {
         img.addEventListener('click', (e) => {
             e.preventDefault()
             nav.style = `
        left:-400px;
        transition: 0.5s;
        `
             burger.style = `
        display:block;
        `
         })
     })
}
const screen = window.matchMedia("(max-width:980px)")
if (screen.matches) {
    burgerClick()
}


// Slide

const sliderLine = document.querySelector('.header__content-picture'),
    img = [...sliderLine.children],
    prev = document.querySelector('.header__content-prev'),
    next = document.querySelector('.header__content-next')

    let position = 0

    const nextSlide = () => {
        if(position < ((img.length - 1) * sliderLine.clientWidth)) {
            position += sliderLine.clientWidth
            
        }else {
            position = 0
        }
    
        img.forEach(item => {
            item.style.transform = `translateX(-${position}px)`
            item.style.transition = '1s'
        })
    }   
    
    const prevSlide = () => {
        if(position > 0) {
            position -= sliderLine.clientWidth
        }else {
            position += ((img.length - 1) * sliderLine.clientWidth)
        }
    
        img.forEach(item => {
            item.style.transform = `translateX(-${position}px)`
            item.style.transition = '1s'
        })
    }

let interval = setInterval(nextSlide, 2000) 

next.addEventListener('click', () =>{
    if(next){
        nextSlide()
        clearInterval(interval)
    } else{
        // interval
    }
})
prev.addEventListener('click', () =>{
    if(prev){
        prevSlide()
        clearInterval(interval)
    } else{
        interval
    }
})


const screenSecond = window.matchMedia("(max-width:700px)");
if (screenSecond.matches){
    clearInterval(interval)
} else {
    interval
}
    