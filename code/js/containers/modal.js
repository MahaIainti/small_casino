import React, {Component} from 'react'; 
import {bindActionCreators} from 'redux';  //создает разные действия
import {connect} from 'react-redux'; 
import './modal.css';

  class Modal extends Component {
    constructor(props) {
      super(props)
      this.state = { isModalOpen: false }
    }

    render() {
      return (
        <div>
          <button className='butSign' onClick={() => this.openModal()}>Sign in</button>
          <Mod isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
  <CreatePost onClose={() => this.closeModal()}/>
          </Mod>
        </div>
      )
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
  }

  class Mod extends Component {
    render() {
      if (this.props.isOpen === false)
        return null

      return (
        <div>
          <div className="modal">
            {this.props.children}
          </div>
          <div className="bg" onClick={e => this.close(e)}/>
        </div>
      )
    }

    close(e) {
      e.preventDefault()

      if (this.props.onClose) {
        this.props.onClose()
      }
    }
  }

class CreatePost extends Component {
    welcome(){
      if (this.addName.value ==='lobbyplayer' && this.addName.value ==='lobbyplayer' && this.props.onClose){
        alert('welcome');
        this.props.onClose()
      } else if (this.props.onClose) {
        console.log(this.addName.value, this.addName.value)
        this.props.onClose()
      }
    };

    inpt() {
      var nam=' ';
      return(
        <div className="slider">
                  <input 
                    type="text" 
                    ref={(input)=>{this.addName = input}}
                    name="username" 
                    placeholder="Sign in" 
                    className="form__input"
                  />
                  <input 
                    type="password" 
                    ref={(input)=>{this.addPass = input}}
                    name="password" 
                    placeholder="Password" 
                    className="form__input"
                  />
                  <button type="submit" className="form__button" onClick={this.welcome.bind(this)}>
                    Sign in
                  </button>
          </div> 
      )
    };

    render() {
        return this.inpt();
      
    }
}

function matchDispatchToProps (dispatch){      //превратим ф-ю в свойство
  return bindActionCreators({handleClick: handleClick},dispatch);
}

export default Modal