import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';

export default function HomePage() {
  return (
    <MDBContainer className="position-absolute top-50 start-50 translate-middle">
      <h1>Pick A Check List</h1>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <h2>Express</h2>
          </MDBCardTitle>
          <MDBCardLink>
            <Link to="/Express" >Take Me to the Express List</Link>
          </MDBCardLink>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <h2>Django</h2>
          </MDBCardTitle>
          <MDBCardLink>
            <Link to="/Django" >Take Me to the Django List</Link>
          </MDBCardLink>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <h2>Build Your Own List</h2>
          </MDBCardTitle>
          <MDBCardText></MDBCardText>
          <MDBCardLink>
            <Link to="/BlankList" >Let me build my own list</Link>
          </MDBCardLink>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>

  );
}