import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navbar, NavNewsletter, FootNewsletter, Footer } from "./components/index";
import { Home, PostDetail, About, Articles, Contact } from "./pages/index";
import "tailwindcss/tailwind.css"
import clearLocalStorage from "./services/cache";
import { Analytics } from "@vercel/analytics/react";

clearLocalStorage();

function App() {

  return (
    <div className="bg-white text-black sm:max-w-screen-sm mx-auto ">
    <Analytics />
    <BrowserRouter>
    <Navbar />
    {/* <NavNewsletter /> */}
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
