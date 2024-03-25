"use client"
import { deleteTodos, editTodos } from '@/api';
import { Task } from '@/types'
import React, { useEffect, useRef, useState } from 'react'

type TodoProps = {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isEditing, setIsEditing] = useState<boolean>();
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo.text);

  useEffect(() => {
    if(isEditing) {
      ref.current?.focus();
    }
  }, [isEditing])

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = async () => {
    await editTodos(todo.id, editedTaskTitle);
    setIsEditing(false);
  }

  const handleDelete = async () => {
    await deleteTodos(todo.id);
  }

  return (
    <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'>
      {isEditing ? (
        <input type='text' className='mr-2 py-1 px-2 rounded border-gray-400 border' value={editedTaskTitle} onChange={(e) => setEditedTaskTitle(e.target.value) } ref={ref}/>
      ) : (
        <span>{todo.text}</span>
      )}
      <div>
        {isEditing ? (
          <button className='text-blue-500 mr-3' onClick={handleSave}>save</button>
        ) : (
          <button className='text-green-500 mr-3' onClick={handleEdit}>edit</button>
        )}

        <button className='text-red-500' onClick={handleDelete}>delete</button>
      </div>
    </li>
  )
}

export default Todo