import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import SvgImage from 'react-native-remote-svg'

import styles from './styles/styles'

const Table = ({ standing }) => {
  return (
    <View style={styles.tableContainer}>
      <View style={[styles.tableRow, styles.tableHeader]}>
        <View style={styles.teamDetails}>
          <Text style={styles.teamPos}></Text>
          <Text style={styles.teamName}>Team</Text>
        </View>
        <View style={styles.tableData}>
          <Text style={styles.tableSingle}>Pl</Text>
          <Text style={styles.tableSingle}>W</Text>
          <Text style={styles.tableSingle}>D</Text>
          <Text style={styles.tableSingle}>L</Text>
          <Text style={styles.tableDouble}>+/-</Text>
          <Text style={styles.tableSingle}>GD</Text>
          <Text style={styles.tableSingle}>Pts</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.tableList}>
        {standing.map((team) => {
          return (
              <View key={team.position} style={styles.tableRow}>
                <View style={styles.teamDetails}>
                  <Text style={styles.teamPos}>{team.position}</Text>
                  <SvgImage style={styles.teamImage} source={{uri: team.crestURI}} />
                  <Text style={styles.teamName}>{team.teamName}</Text>
                </View>
                <View style={styles.tableData}>
                  <Text style={styles.tableSingle}>{team.playedGames}</Text>
                  <Text style={styles.tableSingle}>{team.wins}</Text>
                  <Text style={styles.tableSingle}>{team.draws}</Text>
                  <Text style={styles.tableSingle}>{team.losses}</Text>
                  <Text style={styles.tableDouble}>{team.goals}/{team.goalsAgainst}</Text>
                  <Text style={styles.tableSingle}>{team.goalDifference}</Text>
                  <Text style={styles.tableSingle}>{team.points}</Text>
                </View>
              </View>
          )
        })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Table