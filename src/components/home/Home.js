import React, { Component } from 'react'
import { Image } from 'react-native'
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
import styles from './styles/style'

const competitions = [
  { id: 445 ,name: 'Premier League', country: 'England', logo: require('../../assets/images/logos/PL.png')},
  { id: 455 ,name: 'La Liga',country: 'Spain', logo: require('../../assets/images/logos/PD.png')},
  { id: 452 ,name: 'BundesLiga', country: 'Germany', logo: require('../../assets/images/logos/BL1.png')},
  { id: 456 ,name: 'Serie A', country: 'Italy', logo: require('../../assets/images/logos/SA.png')},
  { id: 450 ,name: 'Ligue 1', country: 'France', logo: require('../../assets/images/logos/FL1.png')},
]

class Home extends Component {
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
          <Body>
            <Title>Competitions</Title>
          </Body>
        </Header>
        <Content style={styles.contentComponent}>
          {competitions.map((competition) => {
            return (
              <Card
                style={styles.cardComponent}
                key={competition.id}
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
            )
          })}
        </Content>
      </Container>
    );
  }
}

export default Home
