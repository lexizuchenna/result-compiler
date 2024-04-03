import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";

import Main from "../components/Main";
import Grader from "../components/Grader";
import OtherInfo from "../components/OtherInfo";
import AffectiveDomain from "../components/AffectiveDomain";
import Psychomotor from "../components/Psychomotor";
import Check from "../components/Check";

function CreateResult() {
  const [resInfo, setResInfo] = useState({
    session: "",
    term: "1st",
    grade: "grade-1",
    name: "",
    age: "",
    sex: "male",
  });
  const [useSub, setUseSub] = useState([]);
  const [id, setId] = useState(generateUUID());

  const [step, setStep] = useState(0);
  const [resultData, setResultData] = useState({});

  const gradeO_F = [
    "english-language",
    "english-literature",
    "verbal-aptitude",
    "phonics",
    "igbo-language",
    "mathematics",
    "quantitative",
    "cultural-subject",
    "basic-science-&-technology",
    "prevocational-studies",
    "religion-&-national-value",
    "computer",
    "french",
    "writing",
    "reading",
    "diction",
    "fine-art",
    "music",
  ];

  useEffect(() => {
    const sessionDetails = JSON.parse(localStorage.getItem("session-details"));

    if (sessionDetails) {
      const { session, term, grade, useSub } = sessionDetails;
      if (useSub && useSub.length > 0) setUseSub(useSub);
      setResInfo((prev) => ({ ...prev, session, term, grade }));
    }
  }, []);

  const onAddSub = (e) => {
    const { name } = e.target;
    const index = useSub.findIndex((sub) => sub === name);
    if (e.target.checked) {
      if (index === -1) {
        useSub.push(name);
      }
    } else {
      if (index !== -1) {
        const newSub = useSub.filter((sub) => sub !== name);
        setUseSub(newSub);
      }
    }
  };

  function generateUUID() {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

    return `${s4()}${s4()}-${s4()}-4${s4().substr(0, 3)}-y${s4().substr(
      0,
      3
    )}-${s4()}${s4()}${s4()}`.toLowerCase();
  }

  const onSaveInfo = () => {
    const { session, term, grade } = resInfo;
    if (!session || !term || !grade)
      return enqueueSnackbar("Fill record", { variant: "error" });
    localStorage.setItem(
      "session-details",
      JSON.stringify({ session, term, grade, useSub })
    );
    return enqueueSnackbar("Success", { variant: "success" });
  };

  const onProceed = () => {
    if (Object.values(resInfo).includes(""))
      return enqueueSnackbar("Fill all record", { variant: "error" });

    const subjects = useSub.map((subject) => ({
      name: subject,
      test1: 0,
      test2: 0,
      exam: 0,
      project: 0,
      average: 0,
    }));

    const data = {
      id: id,
      name: resInfo.name,
      term: resInfo.term,
      session: resInfo.session,
      grade: resInfo.grade,
      age: resInfo.age,
      sex: resInfo.sex,
      subjects: subjects,
      numberOfPupils: "",
      nextTermBegins: "",
      cTeacherComment: "",
      hTeacherComment: "",
      teacher: "",
      aDomain: [
        { name: "Attentiveness", value: "S" },
        { name: "Honesty", value: "S" },
        { name: "Neatness", value: "S" },
        { name: "Politeness", value: "S" },
        { name: "Punctuality", value: "S" },
        { name: "Self control", value: "S" },
        { name: "Obedience", value: "S" },
        { name: "Reliability", value: "S" },
        { name: "Relationship With Others", value: "S" },
      ],
      psychomotor: [
        { name: "Handling of Tools", value: "S" },
        { name: "Drawing /Painting", value: "S" },
        { name: "Public Speaking", value: "S" },
        { name: "Hand writing", value: "S" },
        { name: "Speech Fluency", value: "S" },
        { name: "Sports and Games", value: "S" },
      ],
    };

    if (resInfo.term === "3rd") {
      data.firstAve = "";
      data.secondAve = "";
      data.thirdAve = "";
    }

    setResultData(data);

    const results = localStorage.getItem("results");

    if (!results) {
      localStorage.setItem("results", JSON.stringify([data]));
    } else {
      const parsed = JSON.parse(results);

      const found = parsed.findIndex((res) => res.id === data.id);

      if (found !== -1) parsed[found] = data;
      else parsed.push(data);

      localStorage.setItem("results", JSON.stringify(parsed));
    }

    return setStep(1);
  };

  const onChange = ({ target }) => {
    const { value, name } = target;
    setResInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onNew = () => {
    setId(generateUUID());

    const sessionDetails = JSON.parse(localStorage.getItem("session-details"));

    if (sessionDetails) {
      const { session, term, grade } = sessionDetails;
      setResInfo({ session, term, grade, name: "", age: "", sex: "male" });
    }

    setStep(0);
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="order-xl-1 col-xl-8">
          <div className="bg-secondary shadow card">
            <div className="bg-white border-0 card-header">
              <div className="align-items-center justify-content-between row">
                <div className="text-md text-right col-12">
                  <button className="btn btn-danger btn-sm" onClick={onNew}>
                    New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {step === 0 ? (
        <Main
          onSaveInfo={onSaveInfo}
          resInfo={resInfo}
          onChange={onChange}
          onProceed={onProceed}
          subjects={gradeO_F}
          onAddSub={onAddSub}
          useSub={useSub}
        />
      ) : step === 1 ? (
        <Grader
          data={resultData}
          setResStep={setStep}
          setResultData={setResultData}
        />
      ) : step === 2 ? (
        <OtherInfo
          data={resultData}
          setResStep={setStep}
          setResultData={setResultData}
        />
      ) : step === 3 ? (
        <AffectiveDomain
          data={resultData}
          setResStep={setStep}
          setResultData={setResultData}
        />
      ) : step === 4 ? (
        <Psychomotor
          data={resultData}
          setResStep={setStep}
          setResultData={setResultData}
        />
      ) : (
        <Check
          data={resultData}
          setResStep={setStep}
          setResultData={setResultData}
        />
      )}
    </>
  );
}

export default CreateResult;
