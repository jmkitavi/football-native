import React from 'react'
import { Dimensions, ScrollView, Text} from 'react-native';
import { DrawerItems, DrawerNavigator } from 'react-navigation';

import Competition from './competition/Competition'
import SideMenu from './common/SideMenu/SideMenu'

let { height, width } = Dimensions.get('window')

const routeConfigs = {
  Competition: {
    screen: Competition
  }
}

const drawerNavigatorConfig = {
  initialRouteName: 'Competition',
  drawerWidth: width/1.5 ,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
    activeTintColor: 'red',
  },
  contentComponent: SideMenu
}

export default RootNavigator = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
