import React, {Component} from 'react';
import {ScrollView, Text, View, Image, Button, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as competitionActions from '../../../actions/competitionActions'
import styles from './styles/style';

const competitions = [
  { id: 445 ,name: 'Premier League', logo: require('../../../assets/images/logos/PL.png')},
  { id: 455 ,name: 'La Liga', logo: require('../../../assets/images/logos/PD.png')},
  { id: 452 ,name: 'BundesLiga', logo: require('../../../assets/images/logos/BL1.png')},
  { id: 456 ,name: 'Serie A', logo: require('../../../assets/images/logos/SA.png')},
  { id: 450 ,name: 'Ligue 1', logo: require('../../../assets/images/logos/FL1.png')},
]

class SideMenu extends Component {
  render () {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.logo} source={require('../../../assets/images/ball.png')}/>
            <View style={{ flexDirection: 'column'}}>
              <Text style={styles.title}>FootBall App</Text>
              <Text style={{ fontSize: 8, color: 'gold', paddingHorizontal: 10}}>api.football-data.org</Text>
            </View>
          </View>
        <ScrollView >
          {competitions.map(competition => {
            return (
              <TouchableHighlight 
                key={competition.id}
                onPress={() => {
                  this.props.actions.loadCompetition(competition.id)
                  this.props.navigation.navigate('DrawerClose')
                }}
              >
                <View style={styles.items}>
                  <View style={styles.itemImageContainer}>
                    <Image style={styles.itemImage} source={competition.logo} />
                  </View>
                  <Text style={styles.itemText}>{competition.name}</Text>
                </View>
              </TouchableHighlight>
            )
          })}
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text style={{ color: 'white', fontSize: 10}}>© 2018 sirjmkitavi. </Text>
        </View>
      </View>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(competitionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SideMenu)
