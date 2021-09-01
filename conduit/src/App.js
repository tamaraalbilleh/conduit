// imports
import Feed from "./components/Feed";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Feed />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
