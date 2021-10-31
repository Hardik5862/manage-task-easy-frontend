import { Switch, Route } from "react-router-dom";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import NewTaskPage from "./components/tasks/new-task-page";
import TasksPage from "./components/tasks/tasks-page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/tasks">
          <TasksPage />
        </Route>
        <Route exact path="/tasks/new">
          <NewTaskPage />
        </Route>
        <Route path="*">
          <p>Error 404: Page not found!</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
