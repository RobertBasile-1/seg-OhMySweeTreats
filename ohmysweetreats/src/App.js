
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Variation from "./Variation";
import Options from "./Options";
import Footer from "./Footer";

import Quote from './other/Quote';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
 
        
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
