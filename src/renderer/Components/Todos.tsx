/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-else-return */
/* eslint-disable no-useless-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from 'redux/slices/todoSlice';
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
    <div>
      <input
        type="text"
        className="p-5 text-5xl"
        placeholder="Todo text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button type="button" onClick={handleAddTodo}>
        Add
      </button>
      <div>
        {allTodos.map((item) => (
          <li key={item.id}>
            {item.todo}{' '}
            <span
              onClick={() => dispatch(removeTodo(item.id))}
              style={{
                backgroundColor: 'red',
                padding: '2px 4px',
                cursor: 'pointer',
              }}
            >
              &times;
            </span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Todos;
