import { StyleSheet } from 'react-native';

import { blue, gray } from '../../../../../../../../../constants/colors';

const SIZE = 50;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    backgroundColor: gray,
    borderRadius: SIZE / 2,
    height: SIZE,
    justifyContent: 'center',
    marginRight: 20,
    width: SIZE
  },
  image: {
    height: SIZE,
    width: SIZE,
    borderColor: blue,
    borderRadius: SIZE / 2,
    borderWidth: 1
  }
});

export default styles;
