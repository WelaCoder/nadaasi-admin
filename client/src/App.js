import React from "react";
import "./App.css";
import "./assets/styles/about.css";
import "./assets/styles/banner.css";
import "./assets/styles/buttons.css";
import "./assets/styles/carousel.css";
import "./assets/styles/cart.css";
import "./assets/styles/contact.css";
import "./assets/styles/filters.css";
import "./assets/styles/fonts.css";
import "./assets/styles/footer.css";
import "./assets/styles/index.css";
import "./assets/styles/navbar.css";
import "./assets/styles/sections.css";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Admin from "./components/admin/Admin";
// Redux Setup
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="*" component={() => <Redirect to="/admin" />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
