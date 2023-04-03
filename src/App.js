import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

import { Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
