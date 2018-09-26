import { StyleSheet } from 'react-native';

import { white, red, black } from '../../../../../../../constants/colors';

const styles = StyleSheet.create({
  list: { flex: 10 },
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-between'
  },
  checkbox: {
    backgroundColor: 'whitesmoke',
    borderColor: black,
    borderWidth: 1
  },
  deleteButton: {
    backgroundColor: red,
    borderRadius: 20,
    margin: 10,
    height: 40,
    width: 40
  },
  textWhite: {
    color: white,
    fontWeight: 'bold'
  }
});

export default styles;
