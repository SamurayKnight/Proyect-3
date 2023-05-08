const d = document

const slider = d.querySelectorAll('.slide')
const btns = d.querySelectorAll('.btn')

let currentSlide = 1;

export default function sliderImg(){


const manualNav = function(manual){
    slider.forEach((slide) => {
        slide.classList.remove('active')

        btns.forEach((btn)=>{
            btn.classList.remove('active')
        })
    })

    slider[manual].classList.add('active')
    btns[manual].classList.add('active')
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        manualNav(i);
        currentSlide = i;
    })
})

let repeat = function(activeClass){
    let active= d.getElementsByClassName('active');
    let i = 1;

    let repeater = () =>{
        setTimeout(function(){
            [...active].forEach((activeSlider) =>{
                activeSlider.classList.remove('active')
            })

            slider[i].classList.add('active')
            btns[i].classList.add('active')
            i++
            
            if(slider.length == i){
                i =0;
            }
            
            if (i >= slider.length) {
                return; 
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();
}