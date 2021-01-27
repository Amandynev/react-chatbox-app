import React, { Component } from 'react'
import './App.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message'

class App extends Component {
  state = {
    messages: {},
    // récuperer le pseudo avec les props donné par react, les params !
    pseudo: this.props.match.params.pseudo
  }

  addMessage = (message) => {
    //  on recupère le state
    const messages = { ...this.state.messages}
    // on recupere le message avec une clés pour qu'il soit unique, soit par ex un timestamps
    messages[`message-${Date.now()}`] = message
    // mettre à jour le state
    this.setState({ messages })
  }
  render () {
    return (
      <div className='box'>
         <div>
           <div className='message'>
            <Message />
           </div>
         </div>
         <Formulaire
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}/>
       </div>
    )
  }
}

export default App
