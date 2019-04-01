import React from "react";
import { withFirebase } from "../Firebase";

const AuthUserContext = React.createContext(null);

export const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: JSON.parse(localStorage.getItem("authUser"))
      };
    }

    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) {
          localStorage.setItem("authUser", JSON.stringify(authUser));
          this.setState({ authUser });
        } else {
          localStorage.removeItem("authUser");
          this.setState({ authUser: null });
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <AuthUserContext.Consumer>
            {authUser => <Component {...this.props} authUser={authUser} />}
          </AuthUserContext.Consumer>
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default AuthUserContext;
