import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import {
  MDBInput,
  MDBBtn,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <MDBContainer>
        <h1>AuthPage</h1>
        <MDBBtn onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</MDBBtn>
        {showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
      </MDBContainer>
    </main>
  );
}