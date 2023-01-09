// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isClickedFirstName: false, isClickedLastName: false}

  onClickingFirstName = () => {
    const {isClickedFirstName} = this.state
    this.setState(prevState => ({
      isClickedFirstName: !prevState.isClickedFirstName,
    }))
  }

  onClickingLastName = () => {
    const {isClickedLastName} = this.state
    this.setState(prevState => ({
      isClickedLastName: !prevState.isClickedLastName,
    }))
  }

  renderFirstNameContainer = () => {
    const {isClickedFirstName} = this.state
    if (isClickedFirstName === true) {
      return (
        <div className="first-last-name-container">
          <p className="text">Joe</p>
        </div>
      )
    }
    return null
  }

  renderLastNameContainer = () => {
    const {isClickedLastName} = this.state
    if (isClickedLastName === true) {
      return (
        <div className="first-last-name-container">
          <p className="text">Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="btn-container">
            <div className="name-container">
              <button className="button" onClick={this.onClickingFirstName}>
                Show/Hide Firstname
              </button>
              {this.renderFirstNameContainer()}
            </div>
            <div className="name-container">
              <button className="button" onClick={this.onClickingLastName}>
                Show/Hide Lastname
              </button>
              {this.renderLastNameContainer()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
