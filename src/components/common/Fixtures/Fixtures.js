import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import { View, Text, ScrollView } from 'react-native'
import { Card, CardItem, Left, Body } from 'native-base'
import SvgImage from 'react-native-remote-svg'

import styles from './styles/styles'

const items = []
const dates = []

const groupBy = (fixtures) => {
  result = _.groupBy(fixtures, (fixture) => {
    return moment(fixture.date).format('YYYYMMDD')
  })
  return result
}

const getActiveDate = (arr, value) => {
  var i = arr.length;
  while (arr[--i] >= value);
  return arr[++i]; 
}

const matchData = (fixture) => {
  if (fixture.status == 'FINISHED' || fixture.status == 'IN_PLAY') {
    return (
    <Text style={{ textAlign: 'center', color: 'white' }}>
      {fixture.result.goalsHomeTeam}  -  {fixture.result.goalsAwayTeam}
    </Text>
    )
  }
  else if (fixture.status == 'POSTPONED') {
    return (
    <Text style={{ textAlign: 'center', color: 'white' }}>
      PP
    </Text>
    )
  }
  else {
    return (
    <Text style={{ textAlign: 'center', color: 'white' }}>
      {moment(fixture.date).format('LT')}
    </Text>
    )
  }
}

const cleanTeamName = (teamName) => {
  splitName = teamName.split(' ')
  if (splitName[splitName.length - 1] == 'FC') {
    return teamName.substr(0, teamName.length - 3)
  }
  return teamName
}

const Fixtures = ({ fixtures }) => {
  const groupedFixtures = groupBy(fixtures)
  return (
    <View>
      <ScrollView
        style={{ backgroundColor: '#303030'}}
        ref={(ref) => { this.scrollView = ref }}
        onContentSizeChange={() => {
          scrollToDate = getActiveDate(dates, Number(moment(Date.now()).format('YYYYMMDD')))
          items[scrollToDate]._root.measure((ox, oy, width, height, px, py) => {
            this.scrollView.scrollTo({
              y: py - 103,
              animated: true
            })
          })
        }}
        >
        <View>
          {Object.entries(groupedFixtures).map((group) => {
            dates.push(Number(group[0]))
            return (
              <Card key={group[0]} ref={(ref) => { items[group[0]] = ref }}  style={{ backgroundColor: '#505050'}}>
                <CardItem
                  header
                  style={{ backgroundColor: '#505050', borderBottomColor: '#303030', borderBottomWidth: 0.5, height: 35}}
                >
                  <Text style={{ color: 'white'}}>{moment(group[0]).format('dddd, ll')}</Text>
                </CardItem>
                <CardItem style={{ backgroundColor: '#505050', flexDirection: 'column'}} >
                  {group[1].map((fixture, index) => {
                    console.log(fixture)
                    return (
                      <View
                        key={index}
                        style={{ height: 40, flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center'}}
                      >
                        <View style={{ flex: 9 }}>
                          <Text style={{ textAlign: 'right', color: 'white' }}>
                            {cleanTeamName(fixture.homeTeamName)}
                          </Text>
                        </View>
                        <View style={{ flex: 5}}>
                          {matchData(fixture)}
                        </View>
                        <View style={{flex: 9}}>
                          <Text style={{ textAlign: 'left', color: 'white' }}>
                            {cleanTeamName(fixture.awayTeamName)}
                          </Text>
                        </View>
                      </View>
                    )
                  })}
                </CardItem>
              </Card>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Fixtures