import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import {
  Navbar,
  NavNewsletter,
  FootNewsletter,
  Footer,
} from "./components/index";
import {
  Home,
  PostDetail,
  About,
  Articles,
  Contact,
  AdminDashboard,
  Login,
} from "./pages/index";
import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import clearLocalStorage from "./services/cache";

clearLocalStorage();

function App() {
  const location = useLocation();
  return (
    <div className="bg-white w-screen overflow-x-hidden flex flex-col text-black mx-auto">
      <SpeedInsights />
      <Analytics />
      <Navbar />
      {location.pathname === "/" && <NavNewsletter />}
      <div className="px-6 lg:px-56">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post/:slug" component={PostDetail} />
          <Route path="/about" component={About} />
          <Route path="/articles" component={Articles} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/login" component={Login} />
        </Switch>
        <FootNewsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
