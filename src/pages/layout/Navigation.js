import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./Navigation/LogoutButton";
import { withAuthentication } from "../../components/Session";
import LoginAndSignUpButtons from "./Navigation/LoginAndSignUpButtons";

const Navigation = ({ authUser }) => (
  <div className="field">
    <nav className="level is-mobile">
      <div className="level-left">
        <div className="buttons">
          <Link
            to="/"
            type="submit"
            className="button is-light is-small is-inverted is-rounded"
          >
            Home
          </Link>
          {authUser ? (
            <Link
              to="/profile"
              type="submit"
              className="button is-info is-inverted is-small is-rounded"
            >
              My Profile
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="level-right">
        {authUser ? <LogoutButton /> : <LoginAndSignUpButtons />}
      </div>
    </nav>
  </div>
);

export default withAuthentication(Navigation);
