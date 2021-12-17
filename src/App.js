import "./App.css";
import "./Profile.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import { SignIn, SignOut, useAuthentication } from "./authService";
import Profile from "./Pages/Profile";

import PortfolioBuilder from "./Pages/PortfolioBuilder";

function App() {
  const user = useAuthentication();
  return (
    <Router>
      <div className="App">
        {!user ? "" : <Navbar />}
        {!user ? <SignIn /> : <SignOut />}
        {!user ? (
          ""
        ) : (
          <div className="Content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/PortfolioBuilder">
                <PortfolioBuilder />
              </Route>
              <Route path="/Profile">
                <Profile />
              </Route>
            </Switch>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
