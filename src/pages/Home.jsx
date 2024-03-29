import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="row justify-content-center">
      <div className="order-xl-1 col-xl-8">
        <div className="bg-secondary shadow card">
          <div className="bg-white border-0 card-header">
            <div className="align-items-center justify-content-between row">
              <div className="text-left text-md col-4">
                <Link className="btn btn-dark btn-md" to="/create-result">
                  Create Result
                </Link>
              </div>
              <div className="text-left text-md col-4">
                <Link className="btn btn-dark btn-md" to="/view-results">
                  View Results
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
