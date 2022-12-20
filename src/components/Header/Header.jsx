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
      <MDBNavbar light bgColor='secondary mb-3' >
        <MDBContainer fluid >
          <MDBNavbarBrand>
            <h5>
              <Link to="/">Dev Skills Checklists</Link>
            </h5>
          </MDBNavbarBrand>
          <MDBNavbarBrand>
            <h5>
              <span>Welcome, {user.name}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
            </h5>
            <h5>
              <Link to="/">Home Page</Link>
            </h5>
            <h5>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link to="" onClick={handleLogOut}>Log Out</Link>
            </h5>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
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