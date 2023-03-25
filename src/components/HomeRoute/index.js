import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import UtilityContext from '../../context/UtilityContext'

class HomeRoute extends Component {
  render() {
    return (
      <UtilityContext.Consumer>
        {value => {
          const {name, activeSelectId} = value
          return (
            <div>
              <Header />
              <h1>Let us join</h1>
              {name === '' ? <h1>Welcome to Meetup</h1> : <h1>Hello {name}</h1>}
              {name === '' ? (
                <p>Please register for the topic</p>
              ) : (
                <p>Welcome to {activeSelectId}</p>
              )}
              {!name && (
                <button type="button">
                  <Link to="/register">Register</Link>
                </button>
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </div>
          )
        }}
      </UtilityContext.Consumer>
    )
  }
}

export default HomeRoute
