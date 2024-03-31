function OtherInfo({ data, setResStep, setResultData }) {
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

  const onChange = ({ target }) => {
    const { name, value } = target;
    console.log(data);
    setResultData((prev) => ({ ...prev, [name]: value }));
  };

  const comments = [
    "VERY GOOD",
    "REMARKABLE",
    "EXCELLENT",
    "AWESOME",
    "AMAZING",
    "SATISFACTORY",
    "NEEDS IMPROVEMENT",
    "EXCEPTIONAL",
    "EXTRAORDINARY",
  ];

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
              <h6 class="heading-small text-muted mb-4">Other result info</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">No of pupils</label>
                      <div class="input-group-alternative input-group">
                        <input
                          placeholder="No  of pupils"
                          name="numberOfPupils"
                          type="number"
                          class="form-control"
                          value={data.numberOfPupils}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">Next Term Begins</label>
                      <div class="input-group-alternative input-group">
                        <input
                          placeholder="Next TermB egins"
                          name="nextTermBegins"
                          type="date"
                          class="form-control"
                          value={data.nextTermBegins}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">Class Teacher Comment</label>

                      <select
                        name="cTeacherComment"
                        value={data.cTeacherComment}
                        className="form-control-alternative form-control"
                        onChange={onChange}
                      >
                        {comments.map((comm) => (
                          <option
                            value={comm}
                            key={comm}
                            selected={comm === data.cTeacherComment}
                          >
                            {comm}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">Head Teacher Comment</label>
                      <select
                        name="hTeacherComment"
                        value={data.hTeacherComment}
                        className="form-control-alternative form-control"
                        onChange={onChange}
                      >
                        {comments.map((comm) => (
                          <option
                            value={comm}
                            key={comm}
                            selected={comm === data.hTeacherComment}
                          >
                            {comm}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">Teacher</label>
                      <div class="input-group-alternative input-group">
                        <input
                          placeholder="Teacher"
                          name="teacher"
                          type="text"
                          class="form-control"
                          value={data.teacher}
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

export default OtherInfo;
