import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Navbar } from "./components/index";
import { Home } from "./pages/Home";
import "tailwindcss/tailwind.css"

function App() {

  return (
    <div>
    <Router>
    <Navbar />
    <Switch> 
      <Route path="/" exact component={Home} />
    </Switch>
    </Router>
    </div>
  )
}

export default App;
