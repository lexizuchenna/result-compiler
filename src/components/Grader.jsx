import { useState } from "react";
import { enqueueSnackbar } from "notistack";

function Grader({ data, setResStep, setResultData }) {
  const [step, setStep] = useState(0);
  const totalStep = data.subjects.length;

  const onNext = () => {
    const results = JSON.parse(localStorage.getItem("results"));

    const index = results.findIndex((res) => res.id === data.id);

    results[index] = data;

    localStorage.setItem("results", JSON.stringify(results));

    if (step === totalStep - 1) return setResStep(2);

    setStep((prev) => prev + 1);
  };

  const onBack = () => {
    if (step === 0) return setResStep((prev) => prev - 1);
    setStep((prev) => prev - 1);
  };

  const onChange = ({ target }) => {
    const { name, value } = target;

    const subjects = data.subjects;
    const subject = subjects[step];

    subject[name] = value;
    subjects[step] = subject;

    console.log(data);

    setResultData((prev) => ({ ...prev, subjects }));
  };
  return (
    <div className="row justify-content-center">
      <div className="order-xl-1 col-xl-8">
        <div className="bg-secondary shadow card">
          <div className="bg-white border-0 card-header">
            <div className="align-items-center row">
              <div className="text-left text-md col-6">
                <button
                  type="button"
                  className="btn btn-dark btn-md"
                  onClick={onBack}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <form className="">
              <h6 className="heading-small text-muted mb-4">Result Details</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-control-label" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        placeholder="Subject"
                        disabled
                        type="text"
                        className="form-control-alternative form-control"
                        value={data.subjects[step].name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-control-label" htmlFor="name">
                        Name
                      </label>
                      <input
                        disabled
                        type="text"
                        className="form-control-alternative form-control"
                        value={data.name}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">Result Grades</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-4">
                    <div className="mb-3">
                      <label className="text-sm">1st</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="1st Assessment"
                          name="test1"
                          type="number"
                          className="form-control"
                          value={data.subjects[step].test1}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mb-3">
                      <label className="text-sm">2nd</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="2nd Assessment"
                          name="test2"
                          type="number"
                          className="form-control"
                          value={data.subjects[step].test2}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mb-3">
                      <label className="text-sm">Exam</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="Exam"
                          name="exam"
                          type="number"
                          className="form-control"
                          value={data.subjects[step].exam}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="mb-3">
                      <label className="text-sm">Project</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="Project"
                          name="project"
                          type="number"
                          className="form-control"
                          value={data.subjects[step].project}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-6">
                    <div className="mb-3">
                      <label className="text-sm">Average</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="Subject Average"
                          name="average"
                          type="number"
                          className="form-control"
                          value={data.subjects[step].average}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="text-center">
                      <button
                        type="button"
                        className="my-4 btn btn-primary"
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
