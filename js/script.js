const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');


function addTodo(){
    let todoInputItem = todoInput.value;
    let todoItem = document.createElement('li');
    if (todoInput.value !== ''){
        todoItem.innerText = todoInputItem;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Удалить';
        deleteBtn.classList.add('deleteBtn');

        deleteBtn.addEventListener('click', () =>{
            todoList.removeChild(todoItem);
        })
        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);
        todoInput.value = '';

    }else{
        alert('Тапшырма жазыңыз')
    }
}