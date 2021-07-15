
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Variation from "./Variation";
import Options from "./Options";
import Footer from "./Footer";

import Quote from './other/Quote';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/home");
  }
  return (
 
    <Router>
      <div>
      <Route exact path="/">
        <Redirect to="/home" />
       </Route>
        
          <Navigation/>
          <Switch>
            <Route path="/home">
              <Home></Home>
              <Variation></Variation>
              <Options></Options>
              <Footer></Footer>
            </Route>

            <Route path="/quote">
              <Quote></Quote>
            </Route>

          </Switch>
    </div>
    </Router>

      );
}

      export default App;
