import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignINAndSignUp from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase-utils/firebase-utlis'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(
          userAuth
        );
      }
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.props

    return (
      <div className="App" >
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />

          <Route path="signIn" element={currentUser ? (<Navigate to="/" />) : (<SignINAndSignUp />)} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
