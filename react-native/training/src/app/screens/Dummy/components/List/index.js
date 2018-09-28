import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import booksTypes from '../../../../../types/booksTypes';

import RenderItem from './components/RenderItem';
import styles from './styles';

class List extends Component {
  keyExtractor = ({ id }) => id.toString();

  renderItem = ({ item }) => <RenderItem item={item} />;

  render() {
    const { list } = this.props;
    return (
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(booksTypes.book)
};

export default List;
