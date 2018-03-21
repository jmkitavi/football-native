import { StyleSheet, Platform, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'gold',
  },
  teamData: {
    width: 10,
    height: 10,
    backgroundColor: 'black'
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: 'red',
    margin: 3,
    width: 100
  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  card: {
    backgroundColor: 'red',
    width: (width / 2) - 15,
    height: 100,
    marginLeft: 10,
    marginTop: 10
  } 
})

export default styles;
