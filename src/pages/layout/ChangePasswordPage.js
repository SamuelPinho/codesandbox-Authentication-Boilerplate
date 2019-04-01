import React, { Fragment, Component } from "react";
import { withAuthorization } from "../../components/Session";

const INITIAL_STATE = {
  actualPassword: "",
  newPassword: "",
  error: ""
};

class ChangePasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.firebase
      .handleChangePassword(this.state.password)
      .then(() => {
        console.log("A senha foi alterado com sucesso");
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const isInvalid =
      this.state.actualPassword === "" || this.state.newPassword === "";

    return (
      <Fragment>
        <h1 className="title has-text-dark">Change my Password</h1>
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <div className="label">Actual Password</div>
            <p className="control">
              <input
                name="actualPassword"
                type="password"
                className="input"
                value={this.state.actualPassword}
                onChange={this.onChange}
              />
            </p>
          </div>

          <div className="field">
            <div className="label">New Password</div>
            <p className="control">
              <input
                name="newPassword"
                type="password"
                className="input"
                value={this.state.newPassword}
                onChange={this.onChange}
              />
            </p>
          </div>

          <div className="field">
            <p className="help is-danger">{this.state.error}</p>
          </div>

          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-link"
                disabled={isInvalid}
              >
                Change Password
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withAuthorization()(ChangePasswordPage);
