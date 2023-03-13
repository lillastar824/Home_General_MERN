import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    if (!isAuthenticated) return "";
    return (
      <header style={{ position: "relative" }}>
        <nav className='top-navbar'>
          <div
            className='nav-wrapper'
            style={{
              padding: "0 10px",
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <div
              className='left'
              style={{
                flex: 1,
                marginLeft: 30,
                height: "100%",
              }}
            >
              <form>
                <div class='input-field'>
                  <input id='search' type='search' required />
                  <label class='label-icon' for='search'>
                    <i class='material-icons'>search</i>
                  </label>
                  <i class='material-icons'>close</i>
                </div>
              </form>
            </div>
            <div className='right'>
              <span className='' style={{ marginRight: 10 }}>
                {user.first} {user.last}
              </span>
              <button
                style={{
                  borderRadius: "3px",
                }}
                onClick={this.onLogoutClick}
                className='btn btn-small waves-effect waves-light hoverable blue accent-3'
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
        <a
          href='/'
          data-target='slide-out'
          className='sidenav-trigger'
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <i className='material-icons'>menu</i>
        </a>
        <ul id='slide-out' className='sidenav sidenav-fixed'>
          <li>
            <img
              src='https://www.home.llc/guide/nikfiles/uploads/2021/07/homellc-Logo.png'
              alt=''
              style={{ width: "100%", height: "auto" }}
            />
          </li>
          <li>
            <a
              href='https://github.com/TopETH'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/nathanliu15'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://topeth.info'
              target='_blank'
              rel='noopener noreferrer'
            >
              Website
            </a>
          </li>
        </ul>
      </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
