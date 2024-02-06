import { Router, Route, Switch } from 'react-router-dom'
import { Navbar } from './components'
import { Home } from './pages'

function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Switch> 
      <Route path="/" exact component={Home} />
    </Switch>
    </Router>
    </>
  )
}

export default App
