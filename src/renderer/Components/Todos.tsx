/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, completeTodo, removeTodo } from 'redux/slices/todoSlice';
import { RootState } from 'redux/store/store';

const Todos = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const allTodos = useSelector((state: RootState) => state.todoSlice.todos);

  const handleAddTodo = () => {
    if (allTodos.find((item) => item.todo === todoText) || todoText === '') {
      return;
    } else {
      dispatch(addTodo({ id: Date.now(), todo: todoText }));
      setTodoText('');
      return;
    }
  };
  return (
    <div className="app-container">
      <div className="todo-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Todo text"
          onChange={(e) => setTodoText(e.target.value)}
          value={todoText}
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      {allTodos.length > 0 && (
        <div className="todo-list-container">
          {allTodos
            .map((item) => (
              <li
                className={`single-todo ${
                  item.complete === true ? 'complete-todo' : ''
                }`}
                key={item.id}
              >
                <p
                  style={{
                    textDecoration: item.complete ? 'line-through' : '',
                  }}
                >
                  {item.todo}{' '}
                </p>
                <div className="todo-control-button">
                  <button
                    disabled={item.complete === true}
                    type="button"
                    onClick={() => dispatch(completeTodo(item.id))}
                    className="complete-button"
                  >
                    &#10003;
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch(removeTodo(item.id))}
                    className="remove-button"
                  >
                    &times;
                  </button>
                </div>
              </li>
            ))
            .reverse()}
        </div>
      )}
    </div>
  );
};

export default Todos;
