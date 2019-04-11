import React from "react";
import { Link } from "react-router-dom";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";

const Navbar = props => {
  const { auth, profile } = props;
  console.log("chạy tới đây nhá");
  console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignOutLinks />
  );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          thai caca
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Navbar);
