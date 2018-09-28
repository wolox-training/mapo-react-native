import { StyleSheet } from 'react-native';

import { blue, gray } from '../../../constants/colors';

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: 'center',
    backgroundColor: gray,
    justifyContent: 'center',
    marginRight: 20
  },
  image: {
    borderColor: blue,
    borderWidth: 1
  }
});

export default styles;
