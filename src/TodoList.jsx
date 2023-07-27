import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && 'No ToDos'}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            // id={todo.id}
            // title={todo.title}
            // isCompleted={todo.isCompleted}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
