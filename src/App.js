import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/Header/headerComponent";
import { connect } from "react-redux";
import SignInAndSignOut from "./pages/SignInAndSignOut/SignInAndSignOut";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import setCurrentUser from "./redux/User/User.actions";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // console.log(userRef);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/hats" component={Hatspage} /> */}
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            exact
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignOut />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
