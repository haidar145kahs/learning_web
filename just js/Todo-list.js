var todoList = [];

function addTodo(){
    let inputElement = document.querySelector('.js-name-input');
    let name =inputElement.value;
    let dateInputElement = document.querySelector('.js-due-date-input');
    let dueDate = dateInputElement.value;
    todoList.push({
        name: name,
        dueDate: dueDate
    });
    console.log(todoList);
    inputElement.value='';
    renderTodoList()
}
function renderTodoList(){
    let todoListHtml = ''  ;
    todoList.forEach(function(todoObject,index){
        let name = todoObject.name;
        let date = todoObject.dueDate;
        let html =  
        `<div>${name}</div>
        <div> ${date}</div>
        <button class="deletButton js-delete-button"> Delete </button>
        `; 
        todoListHtml+=html;
    })
    console.log(todoListHtml); 
    document.querySelector('.js-todo-list').innerHTML =todoListHtml;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click',() =>{
            todoList.splice(index , 1);
            renderTodoList();
        })
    })
    }
document.querySelector('.js-add-button').addEventListener('click',()=>{
    addTodo()
})
