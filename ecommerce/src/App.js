import './App.css';
import Home from './views/Body/Home';
import Header from './views/Header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './views/CheckOut/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
