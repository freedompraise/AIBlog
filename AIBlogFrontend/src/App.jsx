import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navbar, FootNewsletter, Footer } from "./components/index";
import { Home, PostDetail, About, Articles, Contact, Login } from "./pages/index";
import "tailwindcss/tailwind.css"
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import clearLocalStorage from "./services/cache";

clearLocalStorage();

function App() {

  return (
    <div className="bg-white w-screen overflow-x-hidden flex flex-col text-black mx-auto">
    <SpeedInsights />
    <Analytics />
    <BrowserRouter>
    <Navbar />
    <div className="px-6 lg:px-20">
    <Switch> 
      <Route path="/" exact component={Home} />
      <Route path="/post/:slug" component={PostDetail} />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </Switch>
    <FootNewsletter />
    </div>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
