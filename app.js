const dateEl = document.querySelector('.data')
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const formCreate = document.querySelector('.form-create')
const inputCreate = document.querySelector('.input-create')
const massegeCreate = document.querySelector('.massege-create')




formCreate.addEventListener('submit', (e) => {
    e.preventDefault()

    const input = inputCreate.value
    console.log(input);

    if(inputCreate.value.trim() !== ''){
        
    }
})
