import { Unsubscribe } from '@firebase/auth';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
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
