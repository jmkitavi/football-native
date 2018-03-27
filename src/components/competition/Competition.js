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
import styles from './styles/styles'

class Competition extends Component {
  render () {
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
          <Tabs style={styles.tabContainer}>
            <Tab
              heading={<TabHeading style={{ backgroundColor: 'black'}}><Text>Table</Text></TabHeading>}
              tabStyle={{ backgroundColor: 'black' }}
              tabBgColor='black' 
              >
              <Table standing={this.props.competition.table.standing} />
            </Tab>
            <Tab heading={<TabHeading style={{ backgroundColor: 'black'}}><Text>Fixture</Text></TabHeading>} >

            </Tab>
          </Tabs>
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