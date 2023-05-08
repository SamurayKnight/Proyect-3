import effect from "./modules/card-efect.js";
import slider from "./modules/slider.js";
import sliderImg from "./modules/img-slider.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) =>{
    effect();
    slider();
    sliderImg();
})