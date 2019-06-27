import * as React from "react";
import { connect } from "react-redux";
import { userLoginAction } from "../store/actions/login/loginAction";

const Login: React.FC = (props: any) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.userLoginAction(username, password);
  }


  return (
    <div className="fixed-max-witdh-container">
      <h3 className="title">Login</h3>
      <form onSubmit={onSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success is-fullwidth" type="submit">
              Login
          </button>
          </p>
        </div>
        <p className="help is-danger">{props.error}</p>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLogin: state.login.isLogin,
    error: state.login.error
  };
};

const mapDispatchToProps = {
  userLoginAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
