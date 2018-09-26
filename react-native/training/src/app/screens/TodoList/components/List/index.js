import React, { Fragment } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import todosTypes from '../../../../../types/todosTypes';

import Items from './components/Items';
import DeleteSelectedButton from './components/DeleteSelectedButton';

const List = props => {
  const { list, onPressButton, onChecked, onDeleteChecked } = props;

  return (
    <Fragment>
      <Items list={list} onPressButton={onPressButton} onChecked={onChecked} />
      <DeleteSelectedButton onDeleteChecked={onDeleteChecked} />
    </Fragment>
  );
};

List.propTypes = {
  onPressButton: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  onDeleteChecked: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(todosTypes.todo)
};

export default List;
