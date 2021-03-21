import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.todos.loading;

export const getFilter = state => state.todos.filter;

export const getAllTodos = state => state.todos.items;

export const getVisibleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

export const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});
