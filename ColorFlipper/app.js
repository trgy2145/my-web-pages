const btn = document.getElementById('btn');
const color =document.querySelector('.color');
const container =document.querySelector('.container');


btn.addEventListener("click", function(){
    
    container.style.backgroundColor = generetaRGB() ;
    color.textContent = generetaRGB() ;



});

function generetaRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}