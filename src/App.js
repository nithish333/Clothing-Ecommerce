import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/Header/headerComponent";
import { connect } from "react-redux";
import SignInAndSignOut from "./pages/SignInAndSignOut/SignInAndSignOut";
import {
  auth,
  createUserProfileDocument,
  // addCollectionsAndDocuments,
} from "./firebase/firebase.utils";
import setCurrentUser from "./redux/User/User.actions";
import checkoutPage from "./pages/checkout/checkout";
import { selectCurrentUser } from "./redux/User/User.selector";
// import { selectCollectionForPreview } from "./redux/shopData/shop.selector";

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
      }
      setCurrentUser(userAuth);
      // addCollectionsAndDocuments(
      //   "collections",
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
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
          <Route exact path="/checkout" component={checkoutPage} />
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

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  // collectionsArray: selectCollectionForPreview(state),
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
