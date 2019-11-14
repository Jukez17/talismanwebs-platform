import React from "react";
import MaterialUiForm from "../../Components//Form/Form";
import "./ContactUs.css";
import RequireAuth from "../../Components/Authentication/RequireAuth";
import Grid from "@material-ui/core/Grid";

const ContactUs = () => {
  return (
    <div className="FormContainer">
      <Grid container direction="column" justify="center" alignItems="center">
        <MaterialUiForm className="Form" />
      </Grid>
    </div>
  );
};

export default RequireAuth(ContactUs);
