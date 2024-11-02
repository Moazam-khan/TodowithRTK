
import './App.css'
import AddTodo from '../src/components/AddTodo'
import Todos from '../src/components/Todo'

function App() {
  
  return (
    <div className='bg-gray-700'>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App