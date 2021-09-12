import React, { Component } from 'react';
import { Unsubscribe } from '@firebase/auth';
import { onSnapshot } from '@firebase/firestore';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signin-signup/signin-signup.component';

interface IAppProps {}

interface IAppState {
  currentUser: any,
}

class App extends Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth: Unsubscribe = () => undefined;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef) {
          onSnapshot(userRef, (snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });

            console.log(this.state);
          });
        }
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
