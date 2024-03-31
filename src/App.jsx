import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import CreateResult from "./pages/CreateResult";
import EditResult from "./pages/EditResult";
import ViewResults from "./pages/ViewResults";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <Router>
            <div className="row justify-content-center mb-3">
              <div className="order-xl-1 col-12">
                <div className="bg-secondary shadow card">
                  <div className="bg-white border-0 card-header">
                    <div className="align-items-center justify-content-between row">
                      <div className="text-md col-6">
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
              <Route element={<EditResult />} exact path="/edit-result/:id" />
              <Route element={<ViewResults />} exact path="/view-results" />
              <Route element={<Result />} exact path="/view-result" />
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
