import { useState, useEffect } from "react";

function Main({ resInfo, onChange, onInfoSave }) {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="order-xl-1 col-xl-8">
            <div className="bg-secondary shadow card">
              <div className="card-body">
                <form className="">
                  <h6 className="heading-small text-muted mb-4">
                    Result information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label
                            className="form-control-label"
                            htmlFor="session"
                          >
                            Session
                          </label>
                          <input
                            placeholder="Session"
                            type="text"
                            className="form-control-alternative form-control"
                            defaultValue={resInfo.session}
                            value={resInfo.session}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-control-label" htmlFor="term">
                            Term
                          </label>
                          <input
                            placeholder="Term"
                            type="text"
                            className="form-control-alternative form-control"
                            defaultValue={resInfo.term}
                            value={resInfo.term}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-control-label" htmlFor="grade">
                            ClassName
                          </label>
                          <input
                            placeholder="ClassName"
                            type="text"
                            className="form-control-alternative form-control"
                            defaultValue={resInfo.grade}
                            value={resInfo.grade}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="text-center">
                          <button
                            type="button"
                            className="my-4 btn btn-primary"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Student Data
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3 mb-3">
                          <label className="text-sm">ClassName Work</label>
                          <div className="input-group-alternative input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="ClassName Work"
                              name="className-work"
                              type="number"
                              className="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3 mb-3">
                          <label className="text-sm">Assignment</label>
                          <div className="input-group-alternative input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Assignment"
                              name="assignment"
                              type="number"
                              className="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3 mb-3">
                          <label className="text-sm">Mid Term Test</label>
                          <div className="input-group-alternative input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Mid Term Test"
                              name="mid-term-test"
                              type="number"
                              className="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3 mb-3">
                          <label className="text-sm">Project</label>
                          <div className="input-group-alternative input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Project"
                              name="project"
                              type="number"
                              className="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3 mb-3">
                          <label className="text-sm">Exam</label>
                          <div className="input-group-alternative input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Exam"
                              name="exam"
                              type="number"
                              className="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="text-center">
                          <button
                            type="button"
                            className="my-4 btn btn-primary"
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
