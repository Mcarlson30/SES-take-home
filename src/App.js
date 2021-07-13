import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation"
import EditUsers from "./components/EditUsers/Users";
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/edit-users">
          <EditUsers />
        </Route>
      </Switch>
    </>
  );
}

export default App;
