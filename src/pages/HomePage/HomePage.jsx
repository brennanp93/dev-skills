import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="checkListBtnBox">
        <h1>Pick A Check List</h1>
        <div>
          <button >
            <h2>
              <Link to="/Express">Express</Link>
            </h2>
          </button>
        </div>
        <div>
          <button>
            <h2>
              <Link to="/Django">Django</Link>
            </h2>
          </button>
        </div>
        <div>
          <button>
            <h2>
              <Link to="/react">React</Link>
            </h2>
          </button>
        </div>
        <div>
          <button>
            <h2>
              <Link to="/blanklist">New Form</Link>
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}