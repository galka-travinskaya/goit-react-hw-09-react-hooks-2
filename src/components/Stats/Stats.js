import React from 'react';
import { useSelector } from 'react-redux';
import './Stats.css';
import { getTotalTodoCount, getCompletedTodoCount } from '../../redux/todos';

export default function Stats() {
  const total = useSelector(getTotalTodoCount);
  const completed = useSelector(getCompletedTodoCount);

  return (
    <div className="Stats">
      <p className="Stats__item">
        <span className="Stats__value">{total}</span>
        <span className="Stats__label">Всего</span>
      </p>
      <p className="Stats__item">
        <span className="Stats__value">{completed}</span>
        <span className="Stats__label">Выполнено</span>
      </p>
    </div>
  );
}

// const mapStateToProps = state => ({
//   total: getTotalTodoCount(state),
//   completed: getCompletedTodoCount(state),
// });

// export default connect(mapStateToProps)(Stats);
