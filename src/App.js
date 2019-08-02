import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Transition, animated, Spring } from "react-spring/renderprops";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import TopMenuBar from "./components/menubar/TopMenuBar";
import HomePage from "./components/info/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div className="App">
          <div className="leftSideMenu"></div>
          <div className="rightSideMenu"></div>
          <Route
            render={({ location, ...rest }) => (
              <div className="App">
                <TopMenuBar />
                <Transition
                  native
                  items={location}
                  keys={location.pathname.split("/")[1]}
                  from={{
                    position: "absolute",
                    opacity: "0",
                    width: "80%",
                    marginLeft: "10%"
                  }}
                  enter={[
                    { opacity: "1" },
                    { width: "100%", marginLeft: "0%" }
                  ]}
                  leave={{ opacity: "0" }}
                >
                  {(loc, state) => style => (
                    <Route
                      exact
                      path="/"
                      render={props => <HomePage {...props} style={style} />}
                    />
                  )}
                </Transition>
              </div>
            )}
          />

          <div
            style={{
              width: "100%",
              height: "40px",
              position: "fixed",
              bottom: "0",
              backgroundColor: "white"
            }}
          ></div>
        </div>
      </Router>
    );
  }
}

export default App;