import { useState, useEffect } from "react";

function Grader() {
  return (
    <div class="container">
      <div class="container-fluid">
        <div class="row">
          <div class="order-xl-1 col-xl-8">
            <div class="bg-secondary shadow card">
              <div class="bg-white border-0 card-header">
                <div class="align-items-center row">
                  <div class="text-left text-md col-6">
                    <button type="button" class="btn btn-dark btn-md">
                      Back
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form class="">
                  <h6 class="heading-small text-muted mb-4">
                    Current Session Details
                  </h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label
                            class="form-control-label"
                            for="input-username"
                          >
                            Session
                          </label>
                          <input
                            placeholder="Session"
                            disabled=""
                            type="text"
                            class="form-control-alternative form-control"
                            value="2022-2023"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label class="form-control-label" for="input-email">
                            Term
                          </label>
                          <input
                            disabled=""
                            type="text"
                            class="form-control-alternative form-control"
                            value="1st"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4" />
                  <h6 class="heading-small text-muted mb-4">Add Result Data</h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="mb-3 mb-3">
                          <label class="text-sm">Class Work</label>
                          <div class="input-group-alternative input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Class Work"
                              name="class-work"
                              type="number"
                              class="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3 mb-3">
                          <label class="text-sm">Assignment</label>
                          <div class="input-group-alternative input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Assignment"
                              name="assignment"
                              type="number"
                              class="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3 mb-3">
                          <label class="text-sm">Mid Term Test</label>
                          <div class="input-group-alternative input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Mid Term Test"
                              name="mid-term-test"
                              type="number"
                              class="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3 mb-3">
                          <label class="text-sm">Project</label>
                          <div class="input-group-alternative input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Project"
                              name="project"
                              type="number"
                              class="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3 mb-3">
                          <label class="text-sm">Exam</label>
                          <div class="input-group-alternative input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="undefined"></i>
                              </span>
                            </div>
                            <input
                              placeholder="Exam"
                              name="exam"
                              type="number"
                              class="undefined form-control"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12">
                        <div class="mb-3 mb-3">
                          <label class="text-sm">Attach Script</label>
                          <div class="input-group-alternative input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="undefined"></i>
                              </span>
                            </div>
                            <input
                              name="photo"
                              accept=".jpg, .jpeg, .png"
                              type="file"
                              class="form-control undefined form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="text-center">
                          <button type="button" class="my-4 btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="text-center">
                          <button type="button" class="my-4 btn btn-success">
                            Approve
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

export default Grader;
