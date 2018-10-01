import React from 'react';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const Picture = ({ imgUrl, size }) => (
  <View
    style={[
      styles.imageContainer,
      {
        borderRadius: size / 2,
        height: size,
        width: size
      }
    ]}
  >
    {imgUrl !== null ? (
      <Image
        source={{
          uri: imgUrl
        }}
        style={[
          styles.image,
          {
            height: size,
            width: size,
            borderRadius: size / 2
          }
        ]}
        resizeMode="cover"
      />
    ) : (
      <Icon name="cross" type="entypo" color="#fff" />
    )}
  </View>
);

Picture.propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.number.isRequired
};

export default Picture;
