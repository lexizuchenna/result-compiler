import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import CreateResult from "./pages/CreateResult";
import ViewResults from "./pages/ViewResults";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <Router>
            <div className="row justify-content-center mb-3">
              <div className="order-xl-1 col-xl-8">
                <div className="bg-secondary shadow card">
                  <div className="bg-white border-0 card-header">
                    <div className="align-items-center justify-content-end row">
                      <div className="text-left text-md col-4">
                        <Link
                          // type="button"
                          className="btn btn-primary btn-md"
                          to="/"
                        >
                          Go Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Routes>
              <Route element={<Home />} exact path="/" />
              <Route element={<CreateResult />} exact path="/create-result" />
              <Route element={<ViewResults />} exact path="/view-results" />
            </Routes>
          </Router>
        </div>
      </div>
      <SnackbarProvider
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      />
    </>
  );
}

export default App;
