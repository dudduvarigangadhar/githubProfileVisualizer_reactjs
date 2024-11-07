import {Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import Analysis from './components/Analysis'
// import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import RepoItemDetails from './components/RepoItemDetails'
import Repository from './components/Repository'
import './App.css'
import ProfileContext from './ProfileContext'

const App = () => {
  const [username, setUsername] = useState('')
  const [repoName, setRepoName] = useState('')

  const changeRepoName = newRepoName => {
    setRepoName(newRepoName)
  }

  const changeProfileName = newUsername => {
    setUsername(newUsername)
  }

  return (
    <ProfileContext.Provider
      value={{username, changeProfileName, repoName, changeRepoName}}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repositories" component={Repository} />

        <Route
          exact
          path="/repositories/:repoName"
          component={RepoItemDetails}
        />
        <Route exact path="/analysis" component={Analysis} />
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </ProfileContext.Provider>
  )
}
export default App