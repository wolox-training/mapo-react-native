import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/TodoList/actions';

import List from './components/List';
import Input from './components/Input';
import Title from './components/Title';

class Todos extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;

    dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    const { dispatch } = this.props;

    dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos } = this.props;
    return (
      <View>
        <Title>To-Do List</Title>
        <Input placeholder="Type a todo here ..." onSubmitEditing={this.onAddTodo} />
        <List list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape(('name': PropTypes.string.isRequired), ('key': PropTypes.number.isRequired))
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps)(Todos);
