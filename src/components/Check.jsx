import { useNavigate } from "react-router-dom";

function Check({ data, setResStep }) {
  const navigate = useNavigate();

  const onFinish = () => {
    navigate(`/view-result?data=${encodeURIComponent(JSON.stringify(data))}`);
  };

  const onBack = () => {
    return setResStep((prev) => prev - 1);
  };

  const grades = [
    { name: "Grade 1", value: "grade-1" },
    { name: "Grade 2", value: "grade-2" },
    { name: "Grade 3", value: "grade-3" },
    { name: "Grade 4", value: "grade-4" },
    { name: "Grade 5", value: "grade-5" },
  ];
  const sex = [
    { name: "Male", value: "male" },
    { name: "Female", value: "female" },
  ];
  const terms = [
    { name: "1st", value: "1st" },
    { name: "2nd", value: "2nd" },
    { name: "3rd", value: "3rd" },
  ];

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
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="text-sm">Name</label>
                      <div className="input-group-alternative input-group">
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={data.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-control-label" htmlFor="session">
                        Session
                      </label>
                      <input
                        type="text"
                        className="form-control-alternative form-control"
                        value={data.session}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="text-sm">Term</label>
                      <select
                        className="form-control-alternative form-control"
                        disabled
                      >
                        {terms.map((se) => (
                          <option
                            value={se.value}
                            key={se.value}
                            selected={se.value === data.term}
                          >
                            {se.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="form-control-label" htmlFor="grade">
                        Grade
                      </label>

                      <select
                        className="form-control-alternative form-control"
                        disabled
                      >
                        {grades.map((grade) => (
                          <option
                            value={grade.value}
                            selected={grade.value === data.grade}
                            key={grade.value}
                          >
                            {grade.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="text-sm">Age</label>
                      <div className="input-group-alternative input-group">
                        <input
                          type="text"
                          className="form-control"
                          value={data.age}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="text-sm">Sex</label>
                      <select
                        className="form-control-alternative form-control"
                        disabled
                      >
                        {sex.map((se) => (
                          <option
                            value={se.value}
                            key={se.value}
                            selected={se.value === data.sex}
                          >
                            {se.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">No of pupils</label>
                      <div class="input-group-alternative input-group">
                        <input
                          type="number"
                          class="form-control"
                          value={data.numberOfPupils}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">Next Term Begins</label>
                      <div class="input-group-alternative input-group">
                        <input
                          type="date"
                          class="form-control"
                          value={data.nextTermBegins}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-6">
                    <div class="mb-3">
                      <label class="text-sm">Class Teacher Comment</label>

                      <select
                        value={data.cTeacherComment}
                        className="form-control-alternative form-control"
                        disabled
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
                        value={data.hTeacherComment}
                        className="form-control-alternative form-control"
                        disabled
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
                          type="text"
                          class="form-control"
                          value={data.teacher}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="text-center">
                      <button
                        type="button"
                        className="my-4 btn btn-primary"
                        onClick={onFinish}
                      >
                        Print
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

export default Check;
