import { useState } from 'react'
import './styles.css'

export default function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          title: newItem,
          isCompleted: false,
        },
      ]
    })
    setNewItem('')
  }

  function toggleTodo(id, isCompleted) {
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, isCompleted }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New Item</label>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type='text'
            id='item'
          />
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>ToDo List</h1>
      <ul className='list'>
        {todos.length === 0 && 'No ToDos'}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type='checkbox'
                  checked={todo.isCompleted}
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
