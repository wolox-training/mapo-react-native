import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import booksTypes from '../../../../../../../types/booksTypes';
import Picture from '../../../../../../components/Picture';
import styles from '../../styles';

class RenderItem extends Component {
  handleOnPress = () => {
    const { item, navigation } = this.props;
    navigation.navigate('BookDetails', { item });
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity style={styles.item} key={item.id} onPress={this.handleOnPress}>
        <Picture imgUrl={item.image_url} size={50} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

RenderItem.propTypes = {
  item: booksTypes.book,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired
};

export default withNavigation(RenderItem);
