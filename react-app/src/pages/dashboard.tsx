import * as React from "react";
import data from "../static/data.json";
import { connect } from "react-redux";
import {userLogoutAction} from "../store/actions/login/loginAction";

interface IUserData {
  id: number;
  name: string;
  age: string;
  gender: string;
  email: string;
  phoneNo: string;
}
const renderTableRow = (userData: IUserData[]) => {
  return userData.map(user => {
    return (
      <tr key={user.id}>
        <th>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.phoneNo}</td>
      </tr>
    )
  })
}

const Dashboard: React.FC = (props: any) => {
  const userData: IUserData[] = data ? data.user : [];
  return (
    <div className="fixed-max-witdh-container">
      <div className="title-section">
        <h3 className="title">Dashboard</h3>
        <button className="button is-danger" onClick={() => {props.userLogoutAction()}}>LogOut</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {renderTableRow(userData)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLogin: state.login.isLogin
  };
};

const mapDispatchToProps = {
  userLogoutAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);