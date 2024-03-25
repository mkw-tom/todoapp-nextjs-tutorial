import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/todos`,{
    cache: "no-store" //ssr(server side rendering)
  });
  const todos = res.json();
  return todos;
}

export const addTodos = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/todos`, {
    method: "POST", 
    headers: {
      "Content-type": "application/jaon"
    },
    body: JSON.stringify(todo),
  });
  const newtodos = res.json();
  return newtodos
};

export const editTodos = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "PUT", 
    headers: {
      "Content-type": "application/jaon"
    },
    body: JSON.stringify({text: newText }),
  });
  const updatedTodos = res.json();
  return updatedTodos;
};

export const deleteTodos = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/jaon"
    }
  });
  const deleteTodos = res.json();
  return deleteTodos;
};