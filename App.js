import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { Homepage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './component/header/header.component'
import SignINAndSignUp from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase-utils/firebase-utlis'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="App" >
        <Header currentUser={this.state.currentUser} />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="signIn" element={<SignINAndSignUp />} />
          {/* <Route path=":hatsId" element={<HatsPage />} /> */}
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


export default App;
