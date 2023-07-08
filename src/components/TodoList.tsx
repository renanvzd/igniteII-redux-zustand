import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector(store => {
    // return store     // se deixar assim vai trazer todos os stores da pasta store no arq index.ts
    return store.todo   // se deixar assim vai trazer apenas o todo desse arquivo
  })

  return (
    <ul>
      {todos.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  )
}