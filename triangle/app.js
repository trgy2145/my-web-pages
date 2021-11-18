const side1 = document.querySelector('.side1');
const side2 = document.querySelector('.side2');
const side3 = document.querySelector('.side3');
const button = document.querySelector('.btn');
const demo = document.querySelector('.demo');
const image = document.querySelector('img');

function control(params) {
    let a = parseInt(side1.value);
    let b = parseInt(side2.value);
    let c = parseInt(side3.value);
    if (side1.value === "" || side2.value === "" || side3.value === "") {
        alert('Please write a valid number');
    } else {
        if (a <= 0 || b <= 0 || c <= 0) {
            demo.innerHTML = "Please write positive numbers";
        } else if (a > b + c || b > a + c || c > b + a) {
            demo.innerHTML = "Invalid triangel size";
        } else if (a == b && b == c && a == c) {
            demo.innerHTML = 'This is equilateral triangel';
            image.src = "eskenar.jpg"
            resetForm();
        } else if (a == b || b == c || a == c) {
            demo.innerHTML = 'This is isosceles triangel';
            image.src = "ikizkenar.jpg"
            resetForm();
        } else {
            demo.innerHTML = 'This is scalene triangel';
            image.src = "scalene.gif"
            resetForm();
        }
    }
}
button.addEventListener('click', (e) => {
    e.preventDefault();
    control();
    resetForm();
})

function resetForm(params) {
    side1.value = "";
    side2.value = "";
    side3.value = "";
}