 import './App.css'
import AddTodo from './components/AddTodos'
import Todos from './components/Todos'

function App() {


  return (
    <>
    <h1 className='text-white text-4xl mt-5'>Todo List Using Redux-toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
