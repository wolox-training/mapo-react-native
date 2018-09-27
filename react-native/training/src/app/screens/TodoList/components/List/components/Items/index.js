import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import todosTypes from '../../../../../../../types/todosTypes';

import RenderItem from './components/RenderItem';
import styles from './styles';

class Items extends Component {
  keyExtractor = ({ key }) => key.toString();

  renderItem = ({ item }) => {
    const { onPressButton, onChecked } = this.props;
    return <RenderItem item={item} onPressButton={onPressButton} onChecked={onChecked} />;
  };

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
  onPressButton: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(todosTypes.todo)
};

export default Items;
