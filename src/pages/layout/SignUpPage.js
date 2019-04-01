import React, { Fragment, Component } from "react";
import { withFirebase } from "../../components/Firebase";
import { withRouter } from "react-router-dom";

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  error: ""
};

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();
    const { username, email } = this.state;

    this.props.firebase
      .handleCreateUser(this.state.email, this.state.password)
      .then(authUser => {
        this.props.firebase.usersCollection
          .doc(authUser.user.uid)
          .set({ username, email });
      })
      .then(() => {
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
    const isInvalid =
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.username === "";

    return (
      <Fragment>
        <h1 className="title has-text-dark">Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <div className="field">
            <div className="label">Username</div>
            <p className="control">
              <input
                name="username"
                type="text"
                className="input"
                value={this.state.username}
                onChange={this.onChange}
              />
            </p>
          </div>

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

          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-link"
                disabled={isInvalid}
              >
                Create User
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withRouter(withFirebase(SignUpPage));
