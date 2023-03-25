import {Component} from 'react'
import Header from '../Header'
import UtilityContext from '../../context/UtilityContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  state = {
    error: false,
  }

  render() {
    const {error} = this.state
    return (
      <UtilityContext.Consumer>
        {value => {
          const {name, activeSelectId, updateName, updateActiveSelectId} = value
          const onSubmit = event => {
            event.preventDefault()
            if (name !== '') {
              const {history} = this.props
              history.replace('/')
            } else {
              this.setState({error: true})
            }
          }
          return (
            <div>
              <Header />
              <h1>Let us join</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={updateName}
                  placeholder="Your name"
                />
                <label htmlFor="topics">TOPICS</label>
                <select
                  name="topics"
                  id="topics"
                  onChange={updateActiveSelectId}
                  value={activeSelectId}
                >
                  {topicsList.map(each => (
                    <option id={each.id}>{each.displayText}</option>
                  ))}
                </select>
                <button type="submit" onClick={this.onSubmit}>
                  Register Now
                </button>
              </form>
              {error && <p>Please enter your name</p>}
            </div>
          )
        }}
      </UtilityContext.Consumer>
    )
  }
}

export default RegisterRoute
