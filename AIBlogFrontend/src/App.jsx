import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navbar, NavNewsletter, FootNewsletter, Footer } from "./components/index";
import { Home, PostDetail, About, Articles, Contact } from "./pages/index";
import "tailwindcss/tailwind.css"
import clearLocalStorage from "./services/cache";

clearLocalStorage();

function App() {

  return (
    <div className="bg-slate-900 sm:max-w-screen-sm mx-auto ">
    <BrowserRouter>
    <Navbar />
    <NavNewsletter />
    <Switch> 
      <Route path="/" exact component={Home} />
      <Route path="/post/:slug" component={PostDetail} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <FootNewsletter />
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
