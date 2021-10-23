import { Switch, Route } from "react-router-dom";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route path="*">
          <p>Error 404: Page not found!</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
