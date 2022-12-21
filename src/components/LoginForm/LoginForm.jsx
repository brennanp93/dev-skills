import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import {
  MDBInput,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    };
  };

  return (
    <MDBContainer >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' name="email" value={credentials.email} onChange={handleChange} />
        <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' name="password" value={credentials.password} onChange={handleChange} required />
        <MDBBtn type='submit' block>Sign in</MDBBtn>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </MDBContainer>
  );
};
