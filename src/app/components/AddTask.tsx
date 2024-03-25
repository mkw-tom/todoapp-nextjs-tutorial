"use client"
import { addTodos } from '@/api'
import { FormEvent, useRef, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const ref = useRef<HTMLInputElement>(null!)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodos({id: uuidv4(), text: taskTitle});
    setTaskTitle("")
    ref.current.value = ""
  }

  return (
    <form className='mb-4 space-y-3' onSubmit={(e) => handleSubmit(e)}>
      <input type="text" className='w-full border px-4 py2 rounded-lg focus:outline-none focus:border-blue-400' onChange={(e) => setTaskTitle(e.target.value)} ref={ref}/>
      <button className='w-full px-4 py-2  text-white bg-blue-500 rounded transform hover:scale-95 hover:bg-blue-400 duration-200'>Add Task</button>
    </form>
  )
}

export default AddTask