import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="home-page-box">
        <h1>Pick A Check List</h1>
        <Link to="/Express" className="home-page-box-button">
          <h2>Express</h2>
        </Link>
        <Link to="/Django" className="home-page-box-button">
          <h2>Django</h2>
        </Link>
        <Link to="/blanklist" className="home-page-box-button">
          <h2>New Form</h2>
        </Link>
      </div>
    </div>

  );
}