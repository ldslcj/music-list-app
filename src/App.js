import React, { Component } from 'react'
import './App.css';
import Musics from './Musics'
import { Container, Header } from 'semantic-ui-react'

class App extends Component {
  state = {
    musics: [
      { id: 1, title: 'Yesterday', artist: 'Beatles'},
      { id: 2, title: 'Butter', artist: 'BTS'},
      { id: 3, title: 'Song', artist: 'Artist'}
    ]
  }

  removeMusic = (id) => {
    const musics = this.state.musics.filter( music => {
      if(music.id !== id)
      return music
    })
    this.setState({ musics: [...musics], })
  }


  render() {
    return(

      <Container>
        <Header as="h1">React Music List</Header>
        <Musics musics={this.state.musics} remove={this.removeMusic} />
      </Container>
    )
  }

}

export default App;
