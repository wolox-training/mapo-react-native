import { StyleSheet } from 'react-native';

import { white, blue } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  list: {
    backfaceVisibility: 'visible'
  },
  item: {
    backgroundColor: 'whitesmoke',
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    height: 50,
    justifyContent: 'space-between'
  },
  itemText: {
    margin: 10
  },
  deleteButton: {
    backgroundColor: blue,
    padding: 2,
    height: 50,
    width: 50
  },
  textWhite: {
    color: white
  }
});

export default styles;
