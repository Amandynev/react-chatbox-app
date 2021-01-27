import React, { Component } from 'react'

class Formulaire extends Component {
  state = {
    message: ""
  }

  handleSubmit = (event) => {
     event.preventDefault()
     // appeler la methode createmessage
     this.createMessage()

    }

  createMessage = () => {
      // récupérer les props en destructuring methodes, pseudo...
      const{ addMessage, pseudo } = this.props
      //  formater les message à un objet
      const message = {
        pseudo,
        message: this.state.message
      }
      addMessage(message)

      // reset le message
      this.setState({ message: ''})
  }

   handleChange = (event) => {
    // stocker le message
     const message = event.target.value
     //  update le state
     this.setState({ message })
    }

  render () {
    return (
      <div>
      <form
        className='form'
        onSubmit={this.handleSubmit}>
        <textarea
        // dire que la valeur du textarea est le state message de départ
          value={this.state.message}
          onChange={this.handleChange}
          required
          maxlenght='140'/>
        <div className='info'>
          140
        </div>
        <button type='submit'>
          Send !
        </button>

      </form>

      </div>
      )
  }
}

export default Formulaire ;
