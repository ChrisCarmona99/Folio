import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Profile from "./Pages/Profile";
import { SignIn, SignOut, useAuthentication } from "./authService";



import PortfolioBuilder from "./Pages/PortfolioBuilder";

function App() {
  const user = useAuthentication();

  return (
    <Router>
      <div className="App">
        <Navbar />
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
      </div>
    </Router>
  );
}

export default App;
