import React, { Fragment, Component } from "react";
import { withFirebase } from "../../components/Firebase";
import { Link, withRouter } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: "",
  error: ""
};

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.firebase
      .handleLogin(this.state.email, this.state.password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/home");
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
    const isInvalid = this.state.email === "" || this.state.password === "";

    return (
      <Fragment>
        <h1 className="title has-text-dark">Login</h1>
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <div className="label">E-mail</div>
            <p className="control">
              <input
                name="email"
                type="email"
                className="input"
                value={this.state.email}
                onChange={this.onChange}
              />
            </p>
          </div>

          <div className="field">
            <div className="label">Password</div>
            <p className="control">
              <input
                name="password"
                type="password"
                className="input"
                value={this.state.password}
                onChange={this.onChange}
              />
            </p>
          </div>

          <div className="field">
            <p className="help is-danger">{this.state.error.message}</p>
          </div>

          <div className="buttons">
            <div className="control">
              <button
                type="submit"
                className="button is-link"
                disabled={isInvalid}
              >
                Login
              </button>

              <Link to={"/recover-pass"} className="button is-text">
                I forget my password
              </Link>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(withFirebase(LoginPage));
