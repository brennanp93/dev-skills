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
          <button>
            <Link to="/">HOME</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/Express">express</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/Django">django</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/React">react</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="/blanklist">New Check List</Link>
          </button>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <button>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </button>
          &nbsp;&nbsp;
        </div>
      </nav>
    </header>
  );
}