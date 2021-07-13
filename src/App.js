import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation"
import EditUsers from "./components/EditUsers/Users";
import AllUsers from "./components/AllUsers/AllUsers";
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/users">
          <AllUsers />
        </Route>
        <Route path="/edit-users">
          <EditUsers />
        </Route>
      </Switch>
    </>
  );
}

export default App;
