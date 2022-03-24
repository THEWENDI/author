import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import CreateAuthor from "./views/CreateAuthor";
import Dashboard from "./views/Dashboard";
import EditAuthor from "./views/EditAuthor";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Favorite authors</h1>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/new">
            <CreateAuthor/>
          </Route>
          <Route exact path="/edit/:id">
            <EditAuthor/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
