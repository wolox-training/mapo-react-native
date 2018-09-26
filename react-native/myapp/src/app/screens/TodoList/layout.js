import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/TodoList/actions';
import todosTypes from '../../../types/todosTypes';

import List from './components/List';
import Input from './components/Input';
import Title from './components/Title';
import styles from './styles';

class Todos extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;
    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { dispatch } = this.props;
    dispatch(actionCreators.remove(index));
  };

  onChecked = index => {
    const { dispatch } = this.props;
    dispatch(actionCreators.checked(index));
  };

  onDeleteChecked = () => {
    const { dispatch } = this.props;
    dispatch(actionCreators.deleteChecked());
  };

  render() {
    const { todos } = this.props;
    return (
      <View style={styles.container}>
        <Title>To-Do List</Title>
        <Input placeholder="Type a todo here ..." onSubmitEditing={this.onAddTodo} />
        <List
          list={todos}
          onPressButton={this.onRemoveTodo}
          onChecked={this.onChecked}
          onDeleteChecked={this.onDeleteChecked}
        />
      </View>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(todosTypes.todo)
};

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps)(Todos);
