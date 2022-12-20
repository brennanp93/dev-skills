import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
export default function Header({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <>
      <MDBNavbar light bgColor='secondary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'><Link to="/">Dev Skills</Link></MDBNavbarBrand>
          <MDBNavbarBrand href='#'>
            <div>
              <span>Welcome, {user.name}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="/">Home Page</Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <br />
    </>
  );

}




// return (
//   <header>
//     <nav>
//       <div>
//         <span>Welcome, {user.name}</span>
//         &nbsp;&nbsp;|&nbsp;&nbsp;
//         <Link to="/">Home Page</Link>
//         &nbsp;&nbsp;|&nbsp;&nbsp;
//         <Link to="" onClick={handleLogOut}>Log Out</Link>
//         &nbsp;&nbsp;|&nbsp;&nbsp;
//       </div>
//     </nav>
//   </header>
// );