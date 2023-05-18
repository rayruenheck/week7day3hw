


function getToDo(){
    const todo = document.querySelector('#todo').value
    return todo
}
function getDesc(){
    const desc = document.querySelector('#desc').value
    return desc


}
const addtodo = document.querySelector('#addtodo') 
addtodo.addEventListener('submit', (event)=>{
    event.preventDefault()
    createListContainer(getDesc(),getToDo())
    

})

function createListContainer(desc,todo){
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const li = document.createElement('li')
    const p = document.createElement('p')
    const button = document.createElement('button')
    button.addEventListener('click',(event)=>{
        event.preventDefault()
        li.remove()
    })
    button.innerText = 'Completed'
    
    li.className = "list-group-item d-flex justify-content-between align-items-start"
    div.className = "ms-2 me-auto"
    div2.className = "fw-bold"
    div2.innerText = todo
    p.innerText = desc
    li.appendChild(div)
    div.appendChild(div2)
    div2.append(p,button)
    
    document.querySelector('.list-group').appendChild(li)
}
