const dateEl = document.querySelector('.data')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const formCreate = document.querySelector('.form-create')
const inputCreate = document.querySelector('.input-create')
const massegeCreate = document.querySelector('.massege-create')
const listGroup = document.querySelector('list-group')

const todos = JSON.parse(localStorage.getItem('list')) 
    ? JSON.parse(localStorage.getItem('list'))
    : []
 console.log(todos);

// show massage

function showMassage (where, massege){
    document.querySelector(`${where}`).textContent = massege ;
    setTimeout(()=>{
        document.querySelector(`${where}`).textContent = ''
    }, 3000)
}

// set todos 

function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))
}

// get todos 

function getTodos(){
    const getTodo = JSON.parse(localStorage.getItem('list'))
    console.log(getTodo);
    // getTodo.forEach( (item, i)=> {
    //     listGroup.innerHTML = `
    //     <li class="list-item">
    //         <span class="todo-text">${item.text}</span>
    //         <div class="elements">
    //             <span class="time-elements">01.10</span>
    //             <img width="25px" height="25px" src="./img/edit.svg" class="edit_img" alt="edit">
    //             <img width="25px" height="25px" src="./img/delete.svg" class="delete-img" alt="delete">
    //         </div>
    //     </li>
    //     `
    // });
}

formCreate.addEventListener('submit', (e) => {
    e.preventDefault()

    const input = inputCreate.value.trim()
   
    if(input.length){
        todos.push({ text: input, time: '30:09'})
        setTodos()
        getTodos()
    }else {
        showMassage( '.massege-create', 'Please, Enter some text...')
    }   
    formCreate.reset()
})
