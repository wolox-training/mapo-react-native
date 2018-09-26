import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../../redux/TodoList/actions';

import Todos from './layout';

const TodosContainer = props => <Todos {...props} />;

const mapStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: text => dispatch(actionCreators.add(text)),
  onRemoveTodo: index => dispatch(actionCreators.remove(index)),
  onChecked: index => dispatch(actionCreators.checked(index)),
  onDeleteChecked: () => dispatch(actionCreators.deleteChecked())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosContainer);
