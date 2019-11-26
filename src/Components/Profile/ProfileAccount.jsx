import React, { Component } from "react";
import SetProfile from "./SetProfile";
import ProfileAccountDetails from "./ProfileAccountDetails";

class ProfileAccount extends Component {
  constructor(props) {
    super(props);
    // You can test by setting true or false
    this.state = { showProfileDetails: false };
  }
  render() {
    const showProfileDetails = this.state.showProfileDetails;
    return (
      <div>
        {showProfileDetails ? <ProfileAccountDetails /> : <SetProfile />}
      </div>
    );
  }
}

export default ProfileAccount;
