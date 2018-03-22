import { StyleSheet, Platform, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
container: {
  height: 40,
  backgroundColor: '#000',
  flexDirection: 'row',
  alignItems: 'center',
},
touchable: {
  paddingHorizontal: 15,
},
title: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  paddingHorizontal: 15,
}
})

export default styles;
