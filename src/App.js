import React from "react";
import Templetlist from "./Component/Pages/Templetlist";
import Navbar from "./Component/NavBar/Navbar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Component/Pages/Home";
import Contact from "./Component/Pages/Contact";
import About from "./Component/Pages/About";
import TempletReview from "./Component/Pages/TempletReview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/Templetlist" component={Templetlist} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Home" component={Home} />
          <Route path="/Templetlist/:Id" component={TempletReview} />
          <Redirect from="/" to="/Home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
