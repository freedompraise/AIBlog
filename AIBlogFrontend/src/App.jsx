import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/index";
import { Home } from "./pages/index";
import "tailwindcss/tailwind.css"

function App() {

  return (
    <div>
    <BrowserRouter>
    <Navbar />
    {/* <Switch> 
      <Route path="/" exact component={Home} />
    </Switch> */}
    </BrowserRouter>
    </div>
  )
}

export default App;
