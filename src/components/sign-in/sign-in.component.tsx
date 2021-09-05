import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

interface ISignInProps {
}

interface ISignInState {
  email: string,
  password: string,
  [key: string]: any,
}

class SignIn extends React.Component<ISignInProps, ISignInState>  {
  constructor(props: ISignInProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
