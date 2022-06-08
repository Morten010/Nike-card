"use strict"
const container = document.querySelector('.container');
const color1 = document.querySelector('.color-1');
const color2 = document.querySelector('.color-2');

color2.addEventListener('click',() =>{
    container.classList.add('change');
});
color1.addEventListener('click',() =>{
    container.classList.remove('change');
});

const size7 = document.querySelector('.size-7');
const size8 = document.querySelector('.size-8');
const size9 = document.querySelector('.size-9');
const size10 = document.querySelector('.size-10');
const size11 = document.querySelector('.size-11');
const sizeBtn = document.querySelectorAll('.size-btn')

size7.addEventListener('click', () =>{
    size9.classList.remove('size-on');
    size10.classList.remove('size-on');
    size11.classList.remove('size-on');
    size8.classList.remove('size-on');
    size7.classList.add('size-on');
});
size8.addEventListener('click', () =>{
    size7.classList.remove('size-on');
    size9.classList.remove('size-on');
    size10.classList.remove('size-on');
    size11.classList.remove('size-on');
    size8.classList.add('size-on');
});
size9.addEventListener('click', () =>{
    size7.classList.remove('size-on');
    size8.classList.remove('size-on');
    size10.classList.remove('size-on');
    size11.classList.remove('size-on');
    size9.classList.add('size-on');
});
size10.addEventListener('click', () =>{
    size7.classList.remove('size-on');
    size9.classList.remove('size-on');
    size8.classList.remove('size-on');
    size11.classList.remove('size-on');
    size10.classList.add('size-on');
});
size11.addEventListener('click', () =>{
    size7.classList.remove('size-on');
    size9.classList.remove('size-on');
    size10.classList.remove('size-on');
    size8.classList.remove('size-on');
    size11.classList.add('size-on');
});
