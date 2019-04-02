import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    fontWeight: '300',
    fontSize: 14,
    color: '$white',
  },
});
