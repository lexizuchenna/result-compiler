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

  const getTotal = (subject) => {
    return +subject.test1 + +subject.test2 + +subject.project + +subject.exam;
  };

  const getChildAverage = () => {
    const total = data?.subjects?.reduce((acc, sub) => getTotal(sub) + acc, 0);

    return (total / result?.subjects?.length).toFixed(2);
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
                Other result info
              </h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="text-sm">No of pupils</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="No  of pupils"
                          name="numberOfPupils"
                          type="number"
                          className="form-control"
                          value={data.numberOfPupils}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="text-sm">Next Term Begins</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="Next TermB egins"
                          name="nextTermBegins"
                          type="date"
                          className="form-control"
                          value={data.nextTermBegins}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="text-sm">Class Teacher Comment</label>

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
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="text-sm">Head Teacher Comment</label>
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
                  <div className="col-12 col-sm-6">
                    <div className="mb-3">
                      <label className="text-sm">Teacher</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="Teacher"
                          name="teacher"
                          type="text"
                          className="form-control"
                          value={data.teacher}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  {data.term === "3rd" && (
                    <>
                      <div className="col-12 col-sm-6">
                        <div className="mb-3">
                          <label className="text-sm">1st Term Ave</label>
                          <div className="input-group-alternative input-group">
                            <input
                              placeholder="First Term Average"
                              name="firstAve"
                              type="text"
                              className="form-control"
                              value={data.firstAve}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="mb-3">
                          <label className="text-sm">2nd Term Ave</label>
                          <div className="input-group-alternative input-group">
                            <input
                              placeholder="2nd Term Average"
                              name="secondAve"
                              type="text"
                              className="form-control"
                              value={data.secondAve}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="mb-3">
                          <label className="text-sm">3rd Term Ave</label>
                          <div className="input-group-alternative input-group">
                            <input
                              placeholder="3rd Term Average"
                              name="thirdAve"
                              type="text"
                              className="form-control"
                              value={getChildAverage()}
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
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
