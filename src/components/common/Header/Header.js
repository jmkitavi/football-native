import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './style/style';

export default class Header extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}
          onPress={() => { this.props.navigation.navigate('DrawerOpen')}}>
          <Icon
            name='menu'
            size={32}/>
        </TouchableOpacity>
        <Text style={styles.title}>{this.props.navigation.state.key}</Text>
      </View>
    )
  }
}