import { StyleSheet, Platform, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
container: {
  height: Platform.OS == 'ios' ? 80 : 70,
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#A2214B'
},
touchable: {
  marginLeft: 15,
  marginTop: Platform.OS == 'ios' ? 28 : 20,
},
title: {
  marginTop: Platform.OS == 'ios' ? 28 : 20,
  marginLeft: width / 3.5,
  fontWeight: 'bold',
  fontSize: 28,
  color: 'white',
}
})

export default styles;
