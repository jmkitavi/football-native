import React, { Component } from 'react'
import { connect } from 'react-redux'
import SvgImage from 'react-native-remote-svg'
import {View, ScrollView, FlatList, ImageBackground, ListView } from 'react-native'
import {
  Tab,
  Tabs,
  TabHeading,
  Text,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Card,
  CardItem,
  Spinner,
  List,
  ListItem,
} from 'native-base'
import axios from 'axios'
import Table from 'react-native-simple-table'

import styles from './styles/styles'

const columns = [
  { title: 'Pos.', dataIndex: 'position'},
  { title: 'Name', dataIndex: 'teamName'},
  { title: 'P', dataIndex: 'playedGames'},
  { title: 'W', dataIndex: 'wins'},
  { title: 'D', dataIndex: 'draws'},
  { title: 'L', dataIndex: 'losses'},
]

class Competition extends Component {
  render () {
    console.log('this', this)
    return (
      <Container>
        <Header style={styles.headerContainer}>
          <Left>
            <Button
              transparent
              onPress={() => { this.props.navigation.navigate('DrawerOpen')}}
              >
              <Icon name='menu' />
            </Button>
          </Left>
            {!this.props.competition.table ? (
              <Title>Competition</Title>
            ):(
              <Title>{this.props.competition.table.leagueCaption}</Title>
            )}
        </Header>
        {!this.props.competition.table ? (
          <Content style={{ backgroundColor: '#4d4d4d'}}>
            <Spinner />
          </Content>
        ):(
        <Content>
          <Tabs>
            <Tab
              heading={<TabHeading style={{ backgroundColor: 'black'}}><Text>Table</Text></TabHeading>}
              tabStyle={{ backgroundColor: 'black' }}
              tabBgColor='black' 
              >
              <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tablePos}> </Text>
                  <Text style={styles.tableName}> Team </Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1}}>
                    <Text style={styles.tablePlays}> PL </Text>
                    <Text style={styles.tableWins}> W </Text>
                    <Text style={styles.tableDraws}> D </Text>
                    <Text style={styles.tableLoss}> L </Text>
                    <Text style={styles.tableLoss}> + / - </Text>
                    <Text style={styles.tableLoss}> GD </Text>
                    <Text style={styles.tableLoss}> Pts </Text>
                  </View>
                </View>
                {this.props.competition.table.standing.map((team) => {
                  return (
                    <View key={team.position} style={styles.tableHeader}>
                      <Text style={styles.tablePos}>{team.position}</Text>
                      <Text style={styles.tableName}>{team.teamName}</Text>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1}}>
                        <Text style={styles.tablePlays}>{team.playedGames}</Text>
                        <Text style={styles.tableWins}>{team.wins}</Text>
                        <Text style={styles.tableDraws}>{team.draws}</Text>
                        <Text style={styles.tableLoss}>{team.losses}</Text>
                        <Text style={styles.tableLoss}>{team.goals} / {team.goalsAgainst}</Text>
                        <Text style={styles.tableLoss}>{team.goalDifference}</Text>
                        <Text style={styles.tableLoss}>{team.points}</Text>
                      </View>
                    </View>
                  )
                })}
              </View>
            </Tab>
            <Tab heading={<TabHeading style={{ backgroundColor: 'black'}}><Text>Fixture</Text></TabHeading>} >

            </Tab>
          </Tabs>
        </Content>
        )}
      </Container>
    )
}
}

function mapStateToProps(state, ownProps) {
  return {
    competition: state.competition
  }
}

export default connect(mapStateToProps, null)(Competition)