import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import {
  MDBInput,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    };
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <MDBContainer>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <MDBInput className='mb-4' size='lg' type='name' label='Name' name='name' value={this.state.name} onChange={this.handleChange} required />
          <MDBInput className='mb-4' size='lg' type='email' label='Email address' name='email' value={this.state.email} onChange={this.handleChange} required />
          <MDBInput className='mb-4' size='lg' type='password' label='Password' name='password' value={this.state.password} onChange={this.handleChange} required />
          <MDBInput className='mb-4' size='lg' type='password' label='Confirm Password' name='confirm' value={this.state.confirm} onChange={this.handleChange} required />
          <MDBBtn color="dark" type='submit' block>Sign in</MDBBtn>
        </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </MDBContainer>
    );
  };
};