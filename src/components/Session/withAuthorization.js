import React from "react";
import { withRouter } from "react-router-dom";
import { withAuthentication } from "./context";

const defaultCondition = authUser => authUser !== null;

const withAuthorization = (condition = defaultCondition) => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.unsubscribe = this.props.firebase.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push("./login");
        }
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return withAuthentication(withRouter(WithAuthorization));
};

export default withAuthorization;
