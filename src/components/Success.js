import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for your submission!</h1>
          <p>You will receive an email with further instructions.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
