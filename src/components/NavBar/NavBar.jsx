import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <header>
      <nav>
        <div>
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="/">Home Page</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>Log Out</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
        </div>
      </nav>
    </header>
  );
}