import React,{useState, useEffect} from 'react'

function TodoList() {
    const [input , setInput] = useState("")
  const [todo, setTodo] = useState([])

  const addTodo = () => {
    if(!input == '' ){
        setTodo([...todo , input])
        setInput("");
    }
  }
  const removeTodo = (index)=> {
    const removedTodo = todo.filter((_,i) => i!== index )
    setTodo(removedTodo)
  }

  return (
    <div>
      <input className='w-[300px] h-[35px]' type="text" onChange={ (e) => setInput(e.target.value)  } />
      <button onClick={addTodo}> Add</button>
      <ul className=' flex flex-col justify-around align-baseline'>
        {todo.map((value , index) => {
          return <li className='w-[350px] h-[30px] text-center m-5'
           key={index}> {value}  <button  onClick={() => removeTodo(index ) }>Remove</button> </li>
        })}
      </ul>
    </div>
  )
}

export default TodoList
