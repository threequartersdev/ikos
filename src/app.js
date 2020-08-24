import './scss/app.scss';

import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Navigation, Pagination]);

gsap.registerPlugin(CSSRulePlugin, ScrollToPlugin, ScrollTrigger);

const item1 = document.querySelector('.item-1');
const item2 = document.querySelector('.item-2');
const item3 = document.querySelector('.item-3');
const item4 = document.querySelector('.item-4');
const item5 = document.querySelector('.item-5');
const item6 = document.querySelector('.item-6');
const xmark1 = document.querySelector('.xmark-1');
const xmark2 = document.querySelector('.xmark-2');
const xmark3 = document.querySelector('.xmark-3');
const xmark4 = document.querySelector('.xmark-4');
const xmark5 = document.querySelector('.xmark-5');
const xmark6 = document.querySelector('.xmark-6');

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const resid = document.querySelector('.resid');
const com = document.querySelector('.com');
const contact = document.querySelector('.contact');

window.onscroll = function () {
  myFunction();
};

let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

home.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#home' },
  });
});
about.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#about', offsetY: 150 },
  });
});
resid.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#residential', offsetY: 120 },
  });
});
com.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#commercial', offsetY: 120 },
  });
});
contact.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: '#contact', offsetY: 120 },
  });
});

item1.addEventListener('mouseenter', () => {
  gsap.to('.text-1', { opacity: 1, y: 0, duration: 0.5 });
});

item1.addEventListener('mouseleave', () => {
  gsap.to('.text-1', { opacity: 0, y: '-100%', duration: 0.5 });
});

item2.addEventListener('mouseenter', () => {
  gsap.to('.text-2', { opacity: 1, y: 0, duration: 0.5 });
});

item2.addEventListener('mouseleave', () => {
  gsap.to('.text-2', { opacity: 0, y: '-100%', duration: 0.5 });
});

item3.addEventListener('mouseenter', () => {
  gsap.to('.text-3', { opacity: 1, y: 0, duration: 0.5 });
});

item3.addEventListener('mouseleave', () => {
  gsap.to('.text-3', { opacity: 0, y: '-100%', duration: 0.5 });
});

item4.addEventListener('mouseenter', () => {
  gsap.to('.text-4', { opacity: 1, y: 0, duration: 0.5 });
});

item4.addEventListener('mouseleave', () => {
  gsap.to('.text-4', { opacity: 0, y: '-100%', duration: 0.5 });
});

item1.addEventListener('click', () => {
  gsap.to('#body', {
    opacity: 1,
    pointerEvents: 'all',
    duration: 1,
  });
});

xmark1.addEventListener('click', () => {
  gsap.to('#body', {
    opacity: 0,
    pointerEvents: 'none',
    duration: 1,
  });
});

item2.addEventListener('click', () => {
  gsap.to('#body-2', {
    opacity: 1,
    pointerEvents: 'all',
    duration: 1,
  });
});

xmark2.addEventListener('click', () => {
  gsap.to('#body-2', {
    opacity: 0,
    pointerEvents: 'none',
    duration: 1,
  });
});

item3.addEventListener('click', () => {
  gsap.to('#body-3', {
    opacity: 1,
    pointerEvents: 'all',
    duration: 1,
  });
});

xmark3.addEventListener('click', () => {
  gsap.to('#body-3', {
    opacity: 0,
    pointerEvents: 'none',
    duration: 1,
  });
});

item4.addEventListener('click', () => {
  gsap.to('#body-4', {
    opacity: 1,
    pointerEvents: 'all',
    duration: 1,
  });
});

xmark4.addEventListener('click', () => {
  gsap.to('#body-4', {
    opacity: 0,
    pointerEvents: 'none',
    duration: 1,
  });
});

item5.addEventListener('click', () => {
  gsap.to('#body-5', {
    opacity: 1,
    pointerEvents: 'all',
    duration: 1,
  });
});

xmark5.addEventListener('click', () => {
  gsap.to('#body-5', {
    opacity: 0,
    pointerEvents: 'none',
    duration: 1,
  });
});

item6.addEventListener('click', () => {
  gsap.to('#body-6', {
    opacity: 1,
    pointerEvents: 'all',
    duration: 1,
  });
});

xmark6.addEventListener('click', () => {
  gsap.to('#body-6', {
    opacity: 0,
    pointerEvents: 'none',
    duration: 1,
  });
});

item5.addEventListener('mouseenter', () => {
  gsap.to('.text-5', { opacity: 1, y: 0, duration: 0.5 });
});

item5.addEventListener('mouseleave', () => {
  gsap.to('.text-5', { opacity: 0, y: '-100%', duration: 0.5 });
});

item6.addEventListener('mouseenter', () => {
  gsap.to('.text-6', { opacity: 1, y: 0, duration: 0.5 });
});

item6.addEventListener('mouseleave', () => {
  gsap.to('.text-6', { opacity: 0, y: '-100%', duration: 0.5 });
});

const swiper = new Swiper('.swiper-container', {
  lazy: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
