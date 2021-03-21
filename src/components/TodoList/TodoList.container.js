import { connect } from 'react-redux';
import { todosOperations, getVisibleTodos } from '../../redux/todos';
import TodoList from './TodoList';
// import { getVisibleTodos } from '../../redux/todos/todos-selectors';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosOperations.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosOperations.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
