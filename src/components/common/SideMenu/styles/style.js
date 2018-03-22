import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
  },
  header: {
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: '#000',
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Georgia',
    color: 'gold',
    paddingHorizontal: 10,
  },
  items: {
    height: 36,
    width: 200,
    flexDirection: 'row',
    backgroundColor: '#000',
    marginLeft: 10,
    alignItems: 'center',
    borderRadius: 18,
    marginTop: 10
  },
  itemImageContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden'
  },
  itemImage: {
    height: 30,
    width: 30,
  },
  itemText: {
    color: 'white',
    paddingLeft: 10
  },
  footerContainer: {
    padding: 6,
    backgroundColor: '#000',
  },
})

export default styles;
