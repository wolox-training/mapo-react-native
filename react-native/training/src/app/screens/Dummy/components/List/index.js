import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import booksTypes from '../../../../../types/booksTypes';

import Items from './components/Items';

const List = ({ list }) => (
  <Fragment>
    <Items list={list} />
  </Fragment>
);

List.propTypes = {
  list: PropTypes.arrayOf(booksTypes.book)
};

export default List;
