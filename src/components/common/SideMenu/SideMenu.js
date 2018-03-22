import React, {Component} from 'react';
import styles from './styles/style';
import { NavigationActions, DrawerItems } from 'react-navigation';
import {ScrollView, Text, View, Image, Button } from 'react-native';

class SideMenu extends Component {
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.header}>

            <Text style={styles.title}>FootBall App</Text>
          </View>
        <ScrollView>
          <DrawerItems {...this.props}/>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Kitavi Joseph 2018</Text>
        </View>
      </View>
    );
  }
}

export default SideMenu;