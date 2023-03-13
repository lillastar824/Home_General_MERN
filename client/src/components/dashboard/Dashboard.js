import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className='container valign-wrapper'>
        <div className='row'>
          <div className='landing-copy col s12 center-align'>
            <h4>
              <b>Hey there,</b>
              <p className='flow-text grey-text text-darken-1'>
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
