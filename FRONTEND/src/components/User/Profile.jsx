import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
//import {useHistory} from 'react-router-dom';
import {logout} from '../../actions/userAction';
import {useDispatch} from 'react-redux';
import {useAlert} from 'react-alert';


const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully")
}



  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
              {(user.role === "admin") && <Link to="/admin/dashboard">Dashboard</Link>}
              
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
                <Link onClick={logoutUser}>Logout</Link>
                <Link style={{background:"none"}}></Link>
                
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
