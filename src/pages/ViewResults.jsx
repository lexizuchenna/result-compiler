import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const results = JSON.parse(localStorage.getItem("results"));

    if (results && results.length > 0) setResults(results);
  }, []);

  const onDownload = () => {};
  return (
    <div className="row justify-content-center">
      <div className="order-xl-1 col-xl-8">
        <div className="bg-secondary shadow card">
          <div className="card-body">
            <form className="">
              <h6 className="heading-small text-muted mb-4">Previous Result</h6>
              <ul>
                {results.length > 0 ? (
                  results.map((res) => (
                    <>
                      <li>
                        <Link to={`/edit-result/${res.id}`}>
                          {res.name} - {res.id}
                        </Link>
                      </li>
                      <hr className="my-4" />
                    </>
                  ))
                ) : (
                  <li>No result available</li>
                )}
              </ul>
            </form>
            {results.length > 0 && (
              <div className="col-sm-12 mt-3">
                <div className="text-center">
                  <button
                    type="button"
                    className="my-4 btn btn-primary"
                    onClick={onDownload}
                  >
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewResults;
