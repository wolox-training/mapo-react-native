import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import booksTypes from '../../../../../../../types/booksTypes';

import RenderItem from './components/RenderItem';
import styles from './styles';

class Items extends Component {
  keyExtractor = ({ id }) => id.toString();

  renderItem = ({ item }) => <RenderItem item={item} />;

  render() {
    const { list } = this.props;
    return (
      <View style={styles.list}>
        <FlatList data={list} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
      </View>
    );
  }
}

Items.propTypes = {
  list: PropTypes.arrayOf(booksTypes.book)
};

export default Items;
