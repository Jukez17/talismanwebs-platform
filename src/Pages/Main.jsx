import React from "react";
import { connect } from "react-redux";
import Home from "./Home/Home";
import Login from "./Authentication/Login";
import Loader from "../Components/Loader/Loader";

const Main = ({ auth }) => {
  return (
    <div>
      {!auth.isLoaded ? <Loader /> : !auth.isEmpty ? <Home /> : <Login />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Main);