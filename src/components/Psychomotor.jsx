import { useState } from "react";
import { enqueueSnackbar } from "notistack";

function Psychomotor({ data, setResStep, setResultData }) {
  const onNext = () => {
    const results = JSON.parse(localStorage.getItem("results"));

    const index = results.findIndex((res) => res.id === data.id);

    results[index] = data;

    localStorage.setItem("results", JSON.stringify(results));

    setResStep((prev) => prev + 1);
  };

  const ratings = [
    { name: "N", value: "N" },
    { name: "S", value: "S" },
    { name: "O", value: "O" },
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
  ];

  const onBack = () => {
    return setResStep((prev) => prev - 1);
  };

  const onPsychChange = ({ target }) => {
    const { name, value } = target;

    const psychomotor = data.psychomotor;

    const i = psychomotor.findIndex((dom) => dom.name === name);

    psychomotor[i].value = value;

    console.log(data);

    setResultData((prev) => ({ ...prev, psychomotor }));
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

              <h6 class="heading-small text-muted mb-4">Psychomotor</h6>
              <div class="pl-lg-4">
                <div class="row">
                  {data.psychomotor.map((dom) => (
                    <div class="col-6">
                      <div class="mb-3">
                        <label className="text-sm">{dom.name}</label>
                        <select
                          name={dom.name}
                          className="form-control-alternative form-control"
                          onChange={onPsychChange}
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

export default Psychomotor;
