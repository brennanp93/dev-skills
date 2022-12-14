import {Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div>
            <div className="checkListBtnBox">
                <h1>Pick A Check List</h1>
                <div>
                    <button >
                        <h2>
                            <Link to="/Express">express</Link>
                        </h2>
                    </button>
                </div>
                <div>
                    <button>
                        <h2>
                            <Link to="/Django">django</Link>
                        </h2>
                    </button>
                </div>
                <div>
                    <button>
                        <h2>
                            <Link to="/react">react</Link>
                        </h2>
                    </button>
                </div>
                <div>
                    <button>
                        <h2>
                            <Link to="/groceries">Blank</Link>
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    );
}