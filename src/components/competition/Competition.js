import React, { Component } from 'react';
import {Text, View, ScrollView, FlatList, ImageBackground, ListView } from 'react-native';
import { List, ListItem, Icon, Card } from 'react-native-elements';
import axios from 'axios'
import SvgImage from 'react-native-remote-svg'

import Header from '../common/Header/Header'
import styles from './styles/styles'

class Competition extends Component {
  state = {
    'teams': []
  }

  componentDidMount() {
    let tid = 445;
    axios.get(`http://api.football-data.org/v1/competitions/${tid}/teams`)
    .then(response => {
      console.log('teams', response.data.teams)
      this.setState({
        teams: response.data.teams
      })
    })
  }

  render () {
    if (this.state.teams.length < 1) {
      return (
        <View style={styles.container}>
          <Header {...this.props}/>
          <View style={styles.content}>
            <Text style={styles.text}>Loading...</Text>
          </View>
        </View>
      );
    } else {
    return (
      <View style={styles.container}>
        <Header {...this.props}/>
          <ScrollView>
            <List>
              <FlatList
                data={this.state.teams}
                renderItem={({ item }) => (
                  <View>
                    <ListItem
                      hideChevron
                      title={item.name}
                      subtitle={item.code}
                      avatar={ <SvgImage  style={{width: 50, height: 50}} source={{uri: item.crestUrl}}/>}
                    />
                  </View>
                )}
                keyExtractor={item => item.name}
              />
            </List>
          </ScrollView>
      </View>
    );
  }
}
}

export default Competition 