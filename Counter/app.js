let counter = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
// console.log(btns[0]);
btns.forEach(function(btn){
    // console.log(number);
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            counter--;
        }else if(styles.contains("increase")){
            counter++;
        }
        else{
            counter = 0;
        }
        if(counter > 0){
            value.style.color = "green";
        }
        if(counter < 0){
            value.style.color = "red";
        }
        if(counter === 0){
            value.style.color = "blue";
        }
        value.textContent = counter;
    });
    
});