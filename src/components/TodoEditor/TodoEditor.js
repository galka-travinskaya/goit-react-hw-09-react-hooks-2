import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todosOperations } from '../../redux/todos';
import './TodoEditor.css';

export default function TodoEditor({ onSave }) {
  const dispatch = useDispatch();
  // state = {
  //   message: '',
  // };

  const [message, setMessage] = useState('');

  // handleChange = e => {
  //   this.setState({ message: e.currentTarget.value });
  // };

  const handleChange = useCallback(e => {
    setMessage(e.currentTarget.value);
  }, []);

  // handleSubmit = e => {
  //   e.preventDefault();

  //   if (this.state.message !== '') {
  //     this.props.onSubmit(this.state.message);
  //     this.props.onSave();
  //     this.setState({ message: '' });
  //     return;
  //   }

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (message === '') {
        return alert('Заполни текст заметки.');
      }

      dispatch(todosOperations.addTodo(message));
      onSave();

      setMessage('');
    },
    [message, dispatch, onSave],
  );

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <textarea
        className="TodoEditor__textarea"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="TodoEditor__button">
        Сохранить
      </button>
    </form>
  );
}
