import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContexts';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()


      if (!todo) return

      addTodo({todo, completed: false})
      setTodo("")
    }
  return (
      <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 font-semibold rounded-l-lg px-3 outline-none duration-150  bg-gray-600 py-1.5 shadow shadow-white"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#05de79] text-white shadow shadow-white font-semibold shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;


