import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
  state = {
    pseudo: "",
    goToChat: false
  }

// evenement onChange : au change de la value
  handleChange = (event) => {
    const pseudo = event.target.value
    this.setState({pseudo})
  }

// evenement onSubmit qui passe le clique du submit du form en true pour la redirection
  handleSubmit = (event) => {
    event.preventDefault()
    // tu update le state goToChat à true
    this.setState({ goToChat: true })
  }

  render () {
    if (this.state.goToChat) {
      // tu me redirect vers l url vers /pseudo/:pseudo
      return <Redirect push to={`/pseudo/${this.state.pseudo}`}/>
    }
    return (

      <div className='connexionBox'>
        <form className="connexion" onSubmit={this.handleSubmit}>
          <input
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder="Pseudo"
            type="text"
            required />
          <button type='submit'>Tchattons !</button>
        </form>
      </div>
      )
  }
}

export default Connexion ;
