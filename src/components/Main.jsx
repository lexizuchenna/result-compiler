import { useLocation } from "react-router-dom";

function Main({ resInfo, onChange, onSaveInfo, onProceed }) {
  const { pathname } = useLocation();

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
  return (
    <div className="row justify-content-center">
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
                      <label className="form-control-label" htmlFor="session">
                        Session
                      </label>
                      <input
                        placeholder="Session"
                        type="text"
                        className="form-control-alternative form-control"
                        name="session"
                        defaultValue={resInfo.session}
                        // value={resInfo.session}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="text-sm">Term</label>
                      <select
                        name="term"
                        className="form-control-alternative form-control"
                        onChange={onChange}
                      >
                        {terms.map((se) => (
                          <option
                            value={se.value}
                            key={se.value}
                            selected={se.value === resInfo.term}
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
                        name="grade"
                        className="form-control-alternative form-control"
                        onChange={onChange}
                      >
                        {grades.map((grade) => (
                          <option
                            value={grade.value}
                            selected={grade.value === resInfo.grade}
                            key={grade.value}
                          >
                            {grade.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {pathname.includes("/edit-result") ? (
                    ""
                  ) : (
                    <div className="col-sm-12">
                      <div className="text-center">
                        <button
                          type="button"
                          className="my-4 btn btn-primary"
                          onClick={onSaveInfo}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <hr className="my-4" />
              <h6 className="heading-small text-muted mb-4">Student Data</h6>
              <div className="pl-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="text-sm">Name</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="Enter Name"
                          name="name"
                          type="text"
                          className="form-control"
                          onChange={onChange}
                          value={resInfo.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="text-sm">Age</label>
                      <div className="input-group-alternative input-group">
                        <input
                          placeholder="Enter Age"
                          name="age"
                          type="text"
                          className="form-control"
                          value={resInfo.age}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label className="text-sm">Sex</label>
                      <select
                        name="sex"
                        className="form-control-alternative form-control"
                        onChange={onChange}
                      >
                        {sex.map((se) => (
                          <option
                            value={se.value}
                            key={se.value}
                            selected={se.value === resInfo.sex}
                          >
                            {se.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="text-center">
                      <button
                        type="button"
                        className="my-4 btn btn-primary"
                        onClick={onProceed}
                      >
                        {!pathname.includes("/edit-result")
                          ? "Proceed"
                          : "Next"}
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

export default Main;
