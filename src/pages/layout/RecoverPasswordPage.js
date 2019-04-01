import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { withAuthorization } from "../../components/Session";

const INITIAL_STATE = {
  email: "",
  error: ""
};

class RecoverPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();

    this.props.firebase
      .handleRecoverPassword(this.state.email)
      .then(() => {
        console.log("E-mail enviado com sucesso!");
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
    const isInvalid = this.state.email === "";

    return (
      <Fragment>
        <h1 className="title has-text-dark">Recover My Password</h1>
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
            <p className="help is-danger">{this.state.error.message}</p>
          </div>

          <div className="field">
            <div className="control" />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withAuthorization()(RecoverPasswordPage);
