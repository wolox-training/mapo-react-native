import { StyleSheet } from 'react-native';

import { black } from '../../../../../constants/colors';

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
  title: {
    color: black,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default styles;
