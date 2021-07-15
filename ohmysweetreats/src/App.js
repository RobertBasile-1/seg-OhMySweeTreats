
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Variation from "./Variation";
import Options from "./Options";
import Footer from "./Footer";

import Quote from './Quote';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
 

          <Navigation/>
          <Switch>
            <Route  exact path="/">
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
