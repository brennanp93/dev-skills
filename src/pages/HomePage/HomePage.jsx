import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBCardTitle,
  MDBCardLink
} from 'mdb-react-ui-kit';


export default function HomePage({checkLis, setCheckList}) {
// const [incomingItems, setIncomingItems] = useState();



  return (
    <MDBContainer className="position-absolute top-50 start-50 translate-middle">
      <h1>Pick A Check List</h1>
      <MDBCard className="shadow-5-strong" >
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
        <MDBCardBody className="shadow-5-strong">
          <MDBCardTitle>
            <h2>Django</h2>
          </MDBCardTitle>
          <MDBCardLink>
            <Link to="/Django" >Take Me to the Django List</Link>
          </MDBCardLink>
        </MDBCardBody>
      </MDBCard>
      <MDBCard >
        <MDBCardBody className="shadow-5-strong">
          <MDBCardTitle>
            <h2>Build Your Own List</h2>
          </MDBCardTitle>
          <MDBCardLink>
            <Link to="/BlankList" >Let me build my own list</Link>
          </MDBCardLink>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>

  );
}