import React, { Component } from 'react'
import { connect } from 'react-redux'
import SvgImage from 'react-native-remote-svg'
import {View, ScrollView } from 'react-native'
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

import Table from '../common/Table/Table'
import Fixtures from '../common/Fixtures/Fixtures'
import styles from './styles/styles'

class Competition extends Component {
  render () {
    return (
      <Container  style={{ backgroundColor: '#404040'}}>
        <Header style={styles.headerContainer} hasTabs androidStatusBarColor='#202020'>
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
        <Tabs style={styles.tabContainer}>
          <Tab
            heading={<TabHeading style={{ backgroundColor: 'black'}}><Text>Fixture</Text></TabHeading>}
            style={{ backgroundColor: '#404040'}}>
              {!this.props.competition.fixtures ? (
                <Spinner />
              ):(
                <Fixtures fixtures={this.props.competition.fixtures.fixtures} />
              )}
          </Tab>
          <Tab
            heading={<TabHeading style={{ backgroundColor: 'black'}}><Text>Table</Text></TabHeading>}
            style={{ backgroundColor: '#404040'}}>
              {!this.props.competition.table ? (
                <Spinner />
              ):(
                <Table standing={this.props.competition.table.standing} />
              )}
          </Tab>
        </Tabs>
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