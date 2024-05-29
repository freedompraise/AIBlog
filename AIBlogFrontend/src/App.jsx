import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navbar, FootNewsletter, Footer } from "./components/index";
import { Home, PostDetail, About, Articles, Contact } from "./pages/index";
import "tailwindcss/tailwind.css"
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";


function App() {

  return (
    <div className="bg-white w-screen overflow-x-hidden px-6 lg:px-20  flex flex-col text-black mx-auto ">
    <SpeedInsights />
    <Analytics />
    <BrowserRouter>
    <Navbar />
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
