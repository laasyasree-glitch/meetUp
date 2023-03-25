import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFound from './components/NotFound'
import UtilityContext from './context/UtilityContext'

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

class App extends Component {
  state = {
    name: '',
    activeSelectId: topicsList[0].id,
  }

  updateName = event => this.setState({name: event.target.value})

  updateActiveSelectId = event => {
    event.preventDefault()
    this.setState({activeSelectId: event.target.value})
  }

  render() {
    const {name, activeSelectId} = this.state
    return (
      <UtilityContext.Provider
        value={{
          name,
          updateName: this.updateName,
          activeSelectId,
          updateActiveSelectId: this.updateActiveSelectId,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Route path="/bad-request" component={NotFound} />
          <Redirect to="bad-request" />
        </Switch>
      </UtilityContext.Provider>
    )
  }
}

export default App
