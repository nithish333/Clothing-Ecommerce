import React from "react";
import { Link } from "react-router-dom";
import "./headerComponent.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CardIcon from "../CardIcon/CardIcon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
  const style = {
    fontSize: "20px",
    cursor: "pointer",
  };
  return (
    <div className="Header">
      <Link className="logoContainer" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()} style={style}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CardIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Header);
