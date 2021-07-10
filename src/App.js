import logo from "./logo.svg";
import "./App.css";

import TodoList from "./Components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";

import AboutUs from "./Components/AboutUs";

import ErrorPage from "./Components/ErrorPage";

import NavBarComponent from "./Components/NavBarComponent";
import TodoApp from "./Components/TodoApp";

function App() {
  return (
    <div className="headd">
      <BrowserRouter>
        {/* Always use link inside router */}

        <NavBarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/todos" component={TodoApp} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>

      {/*
            <div className="Top-div">

                  <img src={logo} width="170" height="170" className="logo" alt="logo" />

                  <h1 className= "app-title" > TODO App </h1> 


                  <br></br>

                  <TodoList />

          </div>
          */}
    </div>
  );
}

export default App;
