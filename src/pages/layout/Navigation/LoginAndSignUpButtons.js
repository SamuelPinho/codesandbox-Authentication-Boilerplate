import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

class LoginAndSignUpButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="buttons">
          <Link
            className="button is-info is-inverted is-small is-rounded"
            to={"/signup"}
          >
            Sign Up
          </Link>
          <Link className="button is-info is-small is-rounded" to={"/login"}>
            Login
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default LoginAndSignUpButtons;
