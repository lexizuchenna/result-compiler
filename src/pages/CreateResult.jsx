import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";

import Main from "../components/Main";
import Grader from "../components/Grader";

function CreateResult() {
  const [resInfo, setResInfo] = useState({
    session: "",
    term: "1st",
    grade: "grade-1",
    name: "",
    age: "",
    sex: "male",
  });
  const [id, setId] = useState(window.crypto.randomUUID());

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
      const { session, term, grade } = sessionDetails;
      setResInfo((prev) => ({ ...prev, session, term, grade }));
    }
  }, []);

  const onSaveInfo = () => {
    const { session, term, grade } = resInfo;
    if (!session || !term || !grade)
      return enqueueSnackbar("Fill record", { variant: "error" });
    localStorage.setItem(
      "session-details",
      JSON.stringify({ session, term, grade })
    );
    return enqueueSnackbar("Success", { variant: "success" });
  };

  const onProceed = () => {
    if (Object.values(resInfo).includes(""))
      return enqueueSnackbar("Fill all record", { variant: "error" });

    setId();
    const subjects = gradeO_F.map((subject) => ({
      name: subject,
      test1: 0,
      test2: 0,
      exam: 0,
      project: 0,
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
    };

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
  return step === 0 ? (
    <Main
      onSaveInfo={onSaveInfo}
      resInfo={resInfo}
      onChange={onChange}
      onProceed={onProceed}
    />
  ) : (
    <Grader
      data={resultData}
      setResStep={setStep}
      setResultData={setResultData}
    />
  );
}

export default CreateResult;
