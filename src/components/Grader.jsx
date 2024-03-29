import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";

function Grader({ data, setResStep }) {
  const [step, setStep] = useState(0);
  const totalStep = data.subjects.length;

  const onNext = () => {
    if (step === totalStep - 1)
      return enqueueSnackbar("End of result", { variant: "default" });

    setStep((prev) => prev + 1);
  };

  const onBack = () => {
    if (step === 0) return setResStep((prev) => prev - 1);

    setStep((prev) => prev - 1);
  };
  return (
    <div class="row justify-content-center">
      <div class="order-xl-1 col-xl-8">
        <div class="bg-secondary shadow card">
          <div class="bg-white border-0 card-header">
            <div class="align-items-center row">
              <div class="text-left text-md col-6">
                <button
                  type="button"
                  class="btn btn-dark btn-md"
                  onClick={onBack}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form class="">
              <h6 class="heading-small text-muted mb-4">Result Details</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-control-label" for="subject">
                        Subject
                      </label>
                      <input
                        placeholder="Subject"
                        disabled=""
                        type="text"
                        class="form-control-alternative form-control"
                        value={data.subjects[step].name}
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-control-label" for="name">
                        Name
                      </label>
                      <input
                        disabled
                        type="text"
                        class="form-control-alternative form-control"
                        value={data.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr class="my-4" />
              <h6 class="heading-small text-muted mb-4">Add Result</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mb-3 mb-3">
                      <label class="text-sm">1st Assessment</label>
                      <div class="input-group-alternative input-group">
                        <input
                          placeholder="1st Assessment"
                          name="test1"
                          type="number"
                          class="form-control"
                          value={data.subjects[step].test1}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 mb-3">
                      <label class="text-sm">2st Assessment</label>
                      <div class="input-group-alternative input-group">
                        <input
                          placeholder="2nd Assessment"
                          name="test2"
                          type="number"
                          class="form-control"
                          value={data.subjects[step].test2}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 mb-3">
                      <label class="text-sm">Exam</label>
                      <div class="input-group-alternative input-group">
                        <input
                          placeholder="Exam"
                          name="exam"
                          type="number"
                          class="form-control"
                          value={data.subjects[step].exam}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3 mb-3">
                      <label class="text-sm">Project</label>
                      <div class="input-group-alternative input-group">
                        <input
                          placeholder="Project"
                          name="project"
                          type="number"
                          class="form-control"
                          value={data.subjects[step].project}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="text-center">
                      <button
                        type="button"
                        class="my-4 btn btn-primary"
                        onClick={onNext}
                      >
                        Next
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
  );
}

export default Grader;
