import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LandingPage from "./layout/LandingPage";
import HomePage from "./layout/HomePage";
import LoginPage from "./layout/LoginPage";
import SignUpPage from "./layout/SignUpPage";
import RecoverPasswordPage from "./layout/RecoverPasswordPage";
import ChangePasswordPage from "./layout/ChangePasswordPage";
import ProfilePage from "./layout/ProfilePage";
import Navigation from "./layout/Navigation";

const Layout = () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Router>
              <Navigation />
              <div className="box">
                <Route exact path={"/"} component={LandingPage} />
                <Route path={"/home"} component={HomePage} />
                <Route path={"/login"} component={LoginPage} />
                <Route path={"/signup"} component={SignUpPage} />
                <Route path={"/recover-pass"} component={RecoverPasswordPage} />
                <Route path={"/change-pass"} component={ChangePasswordPage} />
                <Route path={"/profile"} component={ProfilePage} />
              </div>
            </Router>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Layout;
