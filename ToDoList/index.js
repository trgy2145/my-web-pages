const inputArea = document.querySelector('.textarea');
const add = document.querySelector('.add');
const clearAll = document.querySelector('.clear');
const todoList = document.querySelector('.todoList');
const total = document.querySelector('.total');
count = 0;

events();

function events() {
    add.addEventListener('click', addTask);
    todoList.addEventListener('click', delTask);
    clearAll.addEventListener('click', deleteAll);

}

function addTask(e) {
    if (inputArea.value === '') {
        alert("Please New Task");
    }
    count++;
    const li = document.createElement('li');
    // li.appendChild(document.createTextNode(inputArea.value));

    li.innerHTML += inputArea.value;
    li.innerHTML += '<button class="del" >del</button>';
    todoList.appendChild(li);
    total.innerHTML = `You Have ${count} Task`;
    inputArea.value = '';




    e.preventDefault();

}

function delTask(e) {
    if (e.target.className === 'del') {
        e.target.parentElement.remove();
        count--;
    } else if (e.target.className === 'fas') {


    }


    if (count == 0) {
        total.innerHTML = "you have not task";
        count = 0;
    } else total.innerHTML = `You Have ${count} Task`;
    e.preventDefault();


}

function deleteAll(e) {
    if (confirm("are you sure ?")) {
        todoList.innerHTML = '';
        total.innerHTML = "you have not task";
        count = 0
    }
}