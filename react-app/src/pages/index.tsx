import * as React from "react";
import { connect } from "react-redux";
import Dashboard from "./dashboard";
import Login from "./login";

const Pages: React.FC = (props: any) => {
  return (
    <div className="container is-fluid center-panel">
      {props.isLogin ?  <Dashboard /> : <Login />}
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    isLogin: state.login.isLogin
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages);
