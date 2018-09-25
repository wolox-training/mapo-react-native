import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

import CustomButton from '../../../../../../components/CustomButton';
import todosTypes from '../../../../../../../types/todosTypes';

import styles from './styles';

class Items extends Component {
  handleClick = i => {
    const { onPressButton } = this.props;
    onPressButton(i);
  };

  handleCheck = key => {
    const { onChecked } = this.props;
    onChecked(key);
  };

  keyExtractor = ({ key }) => key.toString();

  renderItem = ({ item }) => (
    <View style={styles.item} key={item.key}>
      <CheckBox
        textStyle={styles.itemText}
        containerStyle={styles.checkbox}
        center
        checked={item.checked}
        iconType="FontAwesome"
        checkedIcon="check"
        uncheckedIcon="clear"
        checkedColor="red"
        onPress={() => this.handleCheck(item.key)}
      />
      <Text>{item.name}</Text>
      <CustomButton
        style={styles.deleteButton}
        textStyle={styles.textWhite}
        onPress={() => this.handleClick(item.key)}
        title="X"
      />
    </View>
  );

  render() {
    const { list, style } = this.props;
    return (
      <FlatList
        style={{ height: '60%' }}
        data={list}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
  }
}

Items.propTypes = {
  onPressButton: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(todosTypes.todo)
};

export default Items;
