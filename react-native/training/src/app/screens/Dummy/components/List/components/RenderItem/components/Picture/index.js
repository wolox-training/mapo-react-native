import React from 'react';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

const Picture = ({ imgUrl }) => (
  <View style={styles.imageContainer}>
    {imgUrl !== null ? (
      <Image
        source={{
          uri: imgUrl
        }}
        style={styles.image}
        resizeMode="cover"
      />
    ) : (
      <Icon name="cross" type="entypo" color="#fff" />
    )}
  </View>
);

Picture.propTypes = {
  imgUrl: PropTypes.string
};

export default Picture;
