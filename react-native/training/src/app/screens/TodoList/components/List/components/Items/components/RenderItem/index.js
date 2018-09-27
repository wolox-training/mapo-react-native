import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import PropTypes from 'prop-types';

import CustomButton from '../../../../../../../../components/CustomButton';
import todosTypes from '../../../../../../../../../types/todosTypes';
import styles from '../../styles';

class RenderItem extends Component {
  handleClick = () => {
    const {
      onPressButton,
      item: { key }
    } = this.props;
    onPressButton(key);
  };

  handleCheck = () => {
    const {
      onChecked,
      item: { key }
    } = this.props;
    onChecked(key);
  };

  render() {
    const { item } = this.props;
    return (
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
          onPress={this.handleCheck}
        />
        <Text>{item.name}</Text>
        <CustomButton
          style={styles.deleteButton}
          textStyle={styles.textWhite}
          onPress={this.handleClick}
          title="X"
        />
      </View>
    );
  }
}

RenderItem.propTypes = {
  onPressButton: PropTypes.func.isRequired,
  onChecked: PropTypes.func.isRequired,
  item: todosTypes.todo
};

export default RenderItem;
