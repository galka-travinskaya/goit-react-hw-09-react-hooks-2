import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/todos';
import './TodoFilter.css';

export default function TodoFilter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
