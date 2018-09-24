import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import CustomButton from '../../../../components/CustomButton';

import styles from './styles';

class List extends Component {
  handleClick = i => {
    const { onPressItem } = this.props;
    onPressItem(i);
  };

  renderItem = text => (
    <View style={styles.item} key={text.key}>
      <Text style={styles.itemText}>{text.name}</Text>
      <CustomButton
        style={styles.deleteButton}
        textStyle={styles.textWhite}
        onPress={() => this.handleClick(text.key)}
        title="x"
      />
    </View>
  );

  render() {
    const { list } = this.props;
    return <ScrollView style={styles.list}>{list.map(this.renderItem)}</ScrollView>;
  }
}

List.propTypes = {
  onPressItem: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default List;
