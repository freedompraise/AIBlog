import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navbar, NavNewsletter, FootNewsletter, Footer } from "./components/index";
import { Home, PostDetail, About } from "./pages/index";
import "tailwindcss/tailwind.css"
import clearLocalStorage from "./services/cache";

clearLocalStorage();

function App() {

  return (
    <div className="bg-slate-900">

    <BrowserRouter>
    <Navbar />
    <NavNewsletter />
    <Switch> 
      <Route path="/" exact component={Home} />
      <Route path="/post/:slug" component={PostDetail} />
      <Route path="/about" component={About} />
    </Switch>
    <FootNewsletter />
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
