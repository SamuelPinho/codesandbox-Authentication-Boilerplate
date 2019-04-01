import React, { Fragment, Component } from "react";
import { withFirebase } from "../../../components/Firebase";

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick = event => {
    event.preventDefault();

    this.props.firebase.handleLogout();
  };

  render() {
    return (
      <Fragment>
        <div className="buttons">
          <button
            className="button is-danger is-small is-rounded"
            onClick={this.onClick}
          >
            Logout
          </button>
        </div>
      </Fragment>
    );
  }
}

export default withFirebase(LogoutButton);
