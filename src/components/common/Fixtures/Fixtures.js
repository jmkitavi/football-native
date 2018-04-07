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
            this.scrollView.scrollTo({y: py - 103})
          })
        }}
        >
        <View>
          {Object.entries(groupedFixtures).map((group) => {
            dates.push(Number(group[0]))
            return (
              <Card key={group[0]} ref={(ref) => { items[group[0]] = ref }}  style={{ backgroundColor: '#505050'}}>
                <Text style={{ color: 'white'}}>{moment(group[0]).format('dddd, ll')}</Text>
                {group[1].map((fixture, index) => {
                  return (
                    <View key={index}>
                      <Text style={{ alignSelf: 'center', color: 'white' }}>
                        {fixture.homeTeamName} {moment(fixture.date).format('LT')} {fixture.awayTeamName}
                      </Text>
                    </View>
                  )
                })}
              </Card>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Fixtures