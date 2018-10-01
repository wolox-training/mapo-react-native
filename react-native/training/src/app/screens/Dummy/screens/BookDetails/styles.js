import { StyleSheet } from 'react-native';

import { blue, black, white } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  title: {
    alignSelf: 'center',
    color: black,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20
  },
  about: {
    alignItems: 'flex-start',
    backgroundColor: blue,
    borderRadius: 5,
    justifyContent: 'flex-start',
    padding: 10,
    margin: 10
  },
  author: {
    color: white
  },
  genre: {
    color: white
  },
  publisher: {
    color: white
  },
  year: {
    color: white
  }
});

export default styles;
