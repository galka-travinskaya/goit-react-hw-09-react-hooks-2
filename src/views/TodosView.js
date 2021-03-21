import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import TodoList from '../components/TodoList';
import TodoEditor from '../components/TodoEditor';
import Filter from '../components/TodoFilter';
import Stats from '../components/Stats';
import Modal from '../components/Modal';
import IconButton from '../components/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
// import todosOperations from '../redux/todos/todos-operations';
import { todosOperations, getLoading } from '../redux/todos';
import Btn from '../components/CounterButton';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function TodosView() {
  const dispatch = useDispatch();
  const isLoadingTodos = useSelector(getLoading);
  const [showModal, setShowModal] = useState(false);
  // state = {
  //   showModal: false,
  // };

  useEffect(() => {
    dispatch(todosOperations.fetchTodos());
  }, [dispatch]);
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };
  // const { showModal } = this.state;

  return (
    <Container>
      <div style={barStyles}>
        <Filter />
        <Stats />
        <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {isLoadingTodos && <h1>Loading...</h1>}
        <Btn />
      </div>

      <TodoList />

      {showModal && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}

// const mapStateToProps = state => ({
//   isLoadingTodos: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchTodos: () => dispatch(todosOperations.fetchTodos()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
