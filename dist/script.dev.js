"use strict";

new Splide('.splide').mount();
new Splide('.splide1').mount();
var splide = new Splide('.splide1', {
  type: 'loop',
  perPage: 4,
  breakpoints: {
    768: {
      perPage: 1
    }
  }
});