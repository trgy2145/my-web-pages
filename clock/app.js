const sec = document.querySelector('.second');
const min = document.querySelector('.min');
const hours = document.querySelector('.hours');

function analog(){
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();
    sec.style.transform = `rotate(${180 + (second *6)}deg)`;
    min.style.transform = `rotate(${180 + (minute *6)}deg)`;
    hours.style.transform = `rotate(${180 + (hour *30)}deg)`;
    
    
}
setInterval(analog,1000);