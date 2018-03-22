import React, { Component } from 'react';
import {Text, View, ScrollView, FlatList, ImageBackground, ListView } from 'react-native';
import { List, ListItem, Icon, Card } from 'react-native-elements';
import { Tab, Tabs, TabHeading } from 'native-base';
import axios from 'axios'
import { connect } from 'react-redux'
import SvgImage from 'react-native-remote-svg'

import Header from '../common/Header/Header'
import styles from './styles/styles'


class Competition extends Component {
  state = {
    'teams': []
  }

  render () {
    console.log('this', this)
    if (!this.props.competition.table) {
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
            <Tabs>
            <Tab heading={<TabHeading style={{ backgroundColor: '#000'}}><Text style={{ color: 'white'}}>Table</Text></TabHeading>} >
                <ScrollView>
                <List>
                  <FlatList
                    data={this.props.competition.table.standing}
                    renderItem={({ item }) => (
                      <View>
                        <ListItem
                          hideChevron
                          title={item.teamName}
                          subtitle={item.position}
                          avatar={ <SvgImage  style={{width: 50, height: 50}} source={{uri: item.crestURI}}/>}
                        />
                      </View>
                    )}
                    keyExtractor={item => +item.position}
                  />
                </List>
              </ScrollView>
              </Tab>
              <Tab heading={<TabHeading style={{ backgroundColor: '#000'}}><Text style={{ color: 'white'}}>Fixtures</Text></TabHeading>} >
              <ScrollView>
                <List>
                  <FlatList
                    data={this.props.competition.fixtures.fixtures}
                    renderItem={({ item }) => (
                      <View>
                        <Text>{item.homeTeamName}</Text>
                        <Text> vs </Text>
                        <Text>{item.awayTeamName}</Text>
                      </View>
                    )}
                    keyExtractor={item => +item.position}
                  />
                </List>
              </ScrollView>
              </Tab>
            </Tabs>
      </View>
    );
  }
}
}

function mapStateToProps(state, ownProps) {
  return {
    competition: state.competition
  }
}

export default connect(mapStateToProps, null)(Competition)