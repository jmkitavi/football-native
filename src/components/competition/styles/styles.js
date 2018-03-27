import {
  StyleSheet,
  Dimensions
} from 'react-native'

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  contentComponent: {
    backgroundColor: '#333333',
  },
  cardComponent: {
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
  imageBody: {
    height: 150,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: 150,
    resizeMode: 'contain'
  },
  tabContainer: {
  },
})

export default styles;
