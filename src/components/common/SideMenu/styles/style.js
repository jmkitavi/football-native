import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 50: 30,
    paddingLeft: 15,
    height: '20%',
    backgroundColor: '#A2214B',
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'gold'
  },
  footerContainer: {
    padding: 15,
    backgroundColor: 'lightgrey'
  },
})

export default styles;
