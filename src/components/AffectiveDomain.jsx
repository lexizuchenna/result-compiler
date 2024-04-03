import { useState } from "react";
import { enqueueSnackbar } from "notistack";

function AffectiveDomain({ data, setResStep, setResultData }) {
  const [step, setStep] = useState(0);
  const totalStep = data.subjects.length;

  const onNext = () => {
    const results = JSON.parse(localStorage.getItem("results"));

    const index = results.findIndex((res) => res.id === data.id);

    results[index] = data;

    localStorage.setItem("results", JSON.stringify(results));

    setResStep((prev) => prev + 1);
  };

  const onBack = () => {
    return setResStep((prev) => prev - 1);
  };

  const ratings = [
    { name: "N", value: "N" },
    { name: "S", value: "S" },
    { name: "O", value: "O" },
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
  ];

  const onADomainChange = ({ target }) => {
    const { name, value } = target;

    const aDomain = data.aDomain;

    const i = aDomain.findIndex((dom) => dom.name === name);

    aDomain[i].value = value;

    console.log(data);

    setResultData((prev) => ({ ...prev, aDomain }));
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
              <h6 className="heading-small text-muted mb-4">
                Affective domain
              </h6>
              <div className="pl-lg-4">
                <div className="row">
                  {data.aDomain.map((dom) => (
                    <div className="col-6" key={dom.name}>
                      <div className="mb-3">
                        <label className="text-sm">{dom.name}</label>
                        <select
                          name={dom.name}
                          className="form-control-alternative form-control"
                          onChange={onADomainChange}
                        >
                          {ratings.map((ra) => (
                            <option
                              value={ra.value}
                              key={ra.value}
                              selected={ra.value === dom.value}
                            >
                              {ra.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}
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

export default AffectiveDomain;
