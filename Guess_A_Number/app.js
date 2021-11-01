const btn = document.getElementById('btn');
const output = document.getElementById('output');
const text = document.getElementById('input');
const restart = document.getElementById('reset');
const number = Math.round(Math.random() * 100);

let times = 10;
let count = 0;

btn.addEventListener('click', function () {
    var userInput = text.value;
    if ((isNaN(userInput) || userInput > 100 || userInput <= 0)) {
        alert('Please enter a valid number...');

    } else {
        count += 1;
        if (userInput == number) {
            output.innerHTML = `Congratulations you found ${count} on the ${number} th try...`;


        } else if (userInput < number) {
            output.innerHTML = `Please enter larger number, your remaining right: ${times-count}`;

        } else if (userInput > number) {
            output.innerHTML = `Please enter smaller number, your remaining right:${times-count}`;


        }
        if (count == 10) {
            text.style.display = 'none';
            btn.style.display = 'none';
            output.innerHTML = "Sorry you didn't know. Please restart to start again."

        }

    }



});

restart.addEventListener('click', () => location.reload());