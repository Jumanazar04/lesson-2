const dateEl = document.querySelector('.data')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const formCreate = document.querySelector('.form-create')
const inputCreate = document.querySelector('.input-create')
const massegeCreate = document.querySelector('.massege-create')

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
