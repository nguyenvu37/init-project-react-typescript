import { Button } from 'components/Button';
import { Input } from 'components/Input';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { fetchTodo } from './../../redux/actions/actionCreators';

export const Contact = () => {
  const { todos } = useAppSelector((state) => state.todosReducer);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  const handleAddTodo = () => {
    setInputValue('');
  };
  return (
    <div className="todo-list mt-3">
      <div className="form-todo d-flex">
        <Input value={inputValue} handleChange={handleChange} placeholder="Todo" />
        <Button handleClick={handleAddTodo} text="Add Todo" />
      </div>
      <br />
      <div className="list">
        {todos &&
          todos.slice(0, 20).map((todo) => (
            <p style={{ textAlign: 'left' }} key={todo.id}>
              {todo.title}
            </p>
          ))}
      </div>
    </div>
  );
};
