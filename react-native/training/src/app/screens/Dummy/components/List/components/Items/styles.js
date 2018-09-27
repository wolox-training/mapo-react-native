import { StyleSheet } from 'react-native';

import { blue, gray, black } from '../../../../../../../constants/colors';

const styles = StyleSheet.create({
  list: { flex: 1 },
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    justifyContent: 'flex-start',
    padding: 5
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: gray,
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    marginRight: 20,
    width: 50
  },
  image: {
    height: 50,
    width: 50,
    borderColor: blue,
    borderRadius: 25,
    borderWidth: 1
  },
  title: {
    color: black,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default styles;
