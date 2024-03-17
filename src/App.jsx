import { useState, useEffect } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

import "./App.css";

import Main from "./components/Main";
import Grader from "./components/Grader";
// import Results from "./components/Results";

function App() {
  const [resInfo, setResInfo] = useState({
    session: "",
    term: "",
    grade: "",
    name: "",
    age: "",
    sex: "",
  });

  const [studInfo, setStudInfo] = useState({ name: "", sex: "", age: "" });

  const [step, setStep] = useState(0);
  const [subjectData, setSubjectData] = useState([]);

  const [subjects, setSubjects] = useState([]);

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
      return enqueueSnackbar("Fill record", { varient: "error" });
    localStorage.setItem(
      "session-details",
      JSON.stringify({ session, term, grade })
    );
  };

  function showPage() {
    switch (step) {
      case 0:
        return <Main resInfo={resInfo} />;
      case 1:
        return <Grader />;
    }
  }

  return (
    <>
      {showPage()}
      <SnackbarProvider
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      />
    </>
  );
}

export default App;
