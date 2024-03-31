import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

import Main from "../components/Main";
import Grader from "../components/Grader";
import OtherInfo from "../components/OtherInfo";
import AffectiveDomain from "../components/AffectiveDomain";
import Psychomotor from "../components/Psychomotor";
import Check from "../components/Check";

function CreateResult() {
  const params = useParams();
  const navigate = useNavigate();
  const [resInfo, setResInfo] = useState({
    session: "",
    term: "",
    grade: "",
    name: "",
    age: "",
    sex: "",
  });

  const [step, setStep] = useState(0);
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    const { id } = params;

    if (!localStorage.getItem("results")) {
      enqueueSnackbar("Error editing result", { variant: "error" });
      return navigate("/");
    }

    const results = JSON.parse(localStorage.getItem("results"));

    const result = results.find((res) => res.id === id);

    console.log(result);

    setResultData(result);
    setResInfo({
      id: result.id,
      session: result.session,
      term: result.term,
      grade: result.grade,
      name: result.name,
      age: result.age,
      sex: result.sex,
    });
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

    console.log(resultData);

    return setStep(1);
  };

  const onChange = ({ target }) => {
    const { value, name } = target;
    setResultData((prev) => ({ ...prev, [name]: value }));
  };

  return step === 0 ? (
    <Main
      onSaveInfo={onSaveInfo}
      resInfo={resInfo}
      onChange={onChange}
      onProceed={onProceed}
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
  );
}

export default CreateResult;
