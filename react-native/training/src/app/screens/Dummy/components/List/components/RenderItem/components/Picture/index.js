import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

class Picture extends Component {
  getImage = url =>
    url !== null ? (
      <Image
        source={{
          uri: url
        }}
        style={styles.image}
        resizeMode="cover"
      />
    ) : (
      <Icon name="cross" type="entypo" color="#fff" />
    );

  render() {
    const { imgUrl } = this.props;
    return <View style={styles.imageContainer}>{this.getImage(imgUrl)}</View>;
  }
}

Picture.propTypes = {
  imgUrl: PropTypes.string
};

export default Picture;
