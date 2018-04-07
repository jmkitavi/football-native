import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
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
  CardItem
} from 'native-base'

import * as competitionActions from '../../actions/competitionActions'
import styles from './styles/style'
import SplashScreen from 'react-native-splash-screen';

const competitions = [
  { id: 445 ,name: 'Premier League', country: 'England', logo: require('../../assets/images/logos/PL.png')},
  { id: 455 ,name: 'La Liga',country: 'Spain', logo: require('../../assets/images/logos/PD.png')},
  { id: 452 ,name: 'BundesLiga', country: 'Germany', logo: require('../../assets/images/logos/BL1.png')},
  { id: 456 ,name: 'Serie A', country: 'Italy', logo: require('../../assets/images/logos/SA.png')},
  { id: 450 ,name: 'Ligue 1', country: 'France', logo: require('../../assets/images/logos/FL1.png')},
]

class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
      // Component taking longer to display content causing a white screen, thus a delay by half a second
    }, 500)
  }
  onSelect(id) {
    this.props.navigation.navigate('Competition')
    this.props.actions.loadCompetition(id)
  }
  render () {
    return (
      <Container>
        <Header style={styles.headerContainer} androidStatusBarColor='#202020'>
          <Left>
            <Button
              transparent
              onPress={() => { this.props.navigation.navigate('DrawerOpen')}}
              >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Competitions</Title>
          </Body>
        </Header>
        <Content style={styles.contentComponent}>
          {competitions.map((competition) => {
            return (
              <TouchableOpacity
                key={competition.id}
                onPress={() => this.onSelect(competition.id)}
                >
                <Card
                  style={styles.cardComponent}
                  >
                  <CardItem style={{ height: 40 }}>
                    <Left>
                      <Body>
                        <Text>{competition.name}</Text>
                        <Text note>{competition.country}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem
                    cardBody
                    style={styles.imageBody}
                    >
                    <Image
                      style={styles.image}
                      source={competition.logo}
                      />
                  </CardItem>
                </Card>
              </TouchableOpacity>
            )
          })}
        </Content>
      </Container>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(competitionActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Home)
