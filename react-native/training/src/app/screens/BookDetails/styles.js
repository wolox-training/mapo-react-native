import { StyleSheet } from 'react-native';

import { blue, gray, black, white } from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  imageContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: gray,
    borderRadius: 100,
    height: 200,
    justifyContent: 'center',
    marginRight: 20,
    width: 200
  },
  image: {
    height: 200,
    width: 200,
    borderColor: blue,
    borderRadius: 100,
    borderWidth: 1
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
