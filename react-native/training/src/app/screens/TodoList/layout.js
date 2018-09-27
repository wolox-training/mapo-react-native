import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import todosTypes from '../../../types/todosTypes';

import List from './components/List';
import Input from './components/Input';
import Title from './components/Title';
import styles from './styles';

const Todos = props => {
  const { todos, onAddTodo, onRemoveTodo, onChecked, onDeleteChecked } = props;
  return (
    <View style={styles.container}>
      <Title>To-Do List</Title>
      <Input placeholder="Type a todo here ..." onSubmitEditing={onAddTodo} />
      <List
        list={todos}
        onPressButton={onRemoveTodo}
        onChecked={onChecked}
        onDeleteChecked={onDeleteChecked}
      />
    </View>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(todosTypes.todo),
  onAddTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  onDeleteChecked: PropTypes.func.isRequired
};

export default Todos;
