import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import booksTypes from '../../../types/booksTypes';
import Title from '../../components/Title';

import List from './components/List';
import styles from './styles';

const Books = ({ list }) => (
  <View style={styles.container}>
    <Title>Books list</Title>
    <List list={list} />
  </View>
);

Books.propTypes = {
  list: PropTypes.arrayOf(booksTypes.book)
};

export default Books;
