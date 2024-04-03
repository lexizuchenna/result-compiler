import { forwardRef } from "react";

import "../assets/style.css";
import logo from "../assets/favicon.png";

const ResultView = forwardRef(({ result }, ref) => {
  const getTotal = (subject) => {
    return +subject.test1 + +subject.test2 + +subject.project + +subject.exam;
  };
  const getGrade = (subject) => {
    const total = getTotal(subject);

    return total >= 85
      ? "E"
      : total >= 79
      ? "G"
      : total >= 65
      ? "S"
      : total <= 55
      ? "NI"
      : "NA";
  };

  const getClassAverage = () => {
    const totalAve = result?.subjects?.reduce(
      (acc, sub) => +sub.average + acc,
      0
    );

    return totalAve / result?.subjects?.length;
  };
  const getChildAverage = () => {
    const total = result?.subjects?.reduce(
      (acc, sub) => getTotal(sub) + acc,
      0
    );

    return (total / result?.subjects?.length).toFixed(2);
  };

  const getTermPerf = () => {
    const ave = +getChildAverage();
    return ave >= 96
      ? "EXCEPTIONAL"
      : ave >= 90
      ? "EXCELLENT"
      : ave >= 75
      ? "VERY GOOD"
      : ave >= 65
      ? "SATISFACTORY"
      : "FAIR";
  };
  return (
    <div className="center-div" ref={ref}>
      <table
        className="tb"
        width="15"
        cellSpacing="0"
        cellPadding="0"
        border="0"
        align="center"
      >
        <tbody>
          <tr style={{ height: "20px" }} className="header">
            <td
              rowSpan="5"
              style={{ display: "inline-block" }}
              className="logo"
              valign="top"
            >
              <img src={logo} width="100" alt="logo" />
            </td>
            <td
              style={{
                width: "800px",
                fontWeight: "bold",
                fontSize: "45px",
                fontFamily: "Poppins",
                display: "inline-block",
              }}
              className="big-title-list"
              valign="top"
              align="center"
            >
              SCHOOL MANAGMENT SYSTEM
            </td>
          </tr>
          <tr>
            <td className="bottom-line " colSpan="2">
              <table width="100%" cellSpacing="0" cellPadding="5" border="1">
                <tbody>
                  <tr>
                    <td className="none caps fit" colSpan={1} align="left">
                      Name of Student
                    </td>
                    <td colSpan={3} className="">
                      {result.name}
                    </td>
                  </tr>

                  <tr>
                    <td className="none caps fit" align="left">
                      Class
                    </td>
                    <td colSpan="3" className="">
                      20
                    </td>
                    <td className="none caps fit" align="left">
                      Age
                    </td>
                    <td colSpan="3" className="">
                      20
                    </td>
                    <td className="none caps fit" align="left">
                      Sex
                    </td>
                    <td colSpan="3" className="">
                      20
                    </td>
                  </tr>
                  <tr>
                    <td className="none caps fit" align="left">
                      Session
                    </td>
                    <td colSpan="3" className="">
                      20
                    </td>
                    <td className="none caps fit" align="left">
                      Term
                    </td>
                    <td colSpan="3" className="">
                      20
                    </td>
                    <td className="none caps fit" align="left">
                      Resmption Date
                    </td>
                    <td colSpan="3" className="">
                      20
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table style={{ marginTop: "20px" }} className="top-line">
                <tbody>
                  <tr className="ass top-line">
                    <td
                      rowSpan="1"
                      className="bottom-right left"
                      width="230"
                      align="center"
                    >
                      SUBJECT
                    </td>
                    <td className="bottom-right" align="center" width="117">
                      CLASS WORK SUMMARY, 1st ASSESSMENT (30)
                    </td>
                    <td className="bottom-right" align="center" width="117">
                      CLASS WORK SUMMARY, 2nd ASSESSMENT (30)
                    </td>

                    <td className="bottom-right" align="center" width="117">
                      PROJECT/NOTES
                    </td>
                    <td className="bottom-right" align="center" width="117">
                      END OF TERM EXAMINATION (30)
                    </td>
                    <td className="bottom-right" align="center" width="117">
                      TOTAL
                    </td>
                    <td className="bottom-right" align="center">
                      SUBJECT AVERAGE
                    </td>
                    <td className="bottom-right" align="center" width="117">
                      ACADEMIC GRADING
                    </td>
                  </tr>
                  {result?.subjects?.map((subject) => (
                    <tr key={subject.name} className="center-row">
                      <td className="bottom-right left" align="center">
                        {subject.name.split("-").join(" ").toUpperCase()}
                      </td>
                      <td className="bottom-right" align="center">
                        {subject.test1}
                      </td>
                      <td className="bottom-right" align="center">
                        {subject.test2}
                      </td>
                      <td className="bottom-right" align="center">
                        {subject.project}
                      </td>
                      <td className="bottom-right" align="center">
                        {subject.exam}
                      </td>
                      <td className="bottom-right" align="center">
                        {getTotal(subject)}
                      </td>
                      <td className="bottom-right" align="center">
                        {subject.average}
                      </td>
                      <td className="bottom-right" align="center">
                        {getGrade(subject)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table
                style={{ marginTop: "20px" }}
                width="250"
                cellSpacing="0"
                cellPadding="0"
                border="0"
              >
                <tbody>
                  <tr>
                    <td
                      rowSpan="25"
                      width="200"
                      align="right"
                      style={{ verticalAlign: "top" }}
                    >
                      <table
                        style={{ margin: "10px", border: "1px solid black" }}
                        width="270"
                        cellSpacing="0"
                        cellPadding="0"
                        border="0"
                        align="left"
                      >
                        <tbody>
                          <tr style={{ color: "#0099ff" }}>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "black",
                                borderBottom: "1px solid #333",
                              }}
                            >
                              <b>SOCIAL BEHAIVOUR</b>
                            </td>
                          </tr>
                          {result?.aDomain?.map((dom) => (
                            <tr className="center-row" key={dom.name}>
                              <td className="title-box">
                                {dom.name.toUpperCase()}
                              </td>
                              <td className="title-box" align="center">
                                {dom.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td style={{ verticalAlign: "top", paddingTop: "10px" }}>
                      <table
                        style={{ border: "1px solid black" }}
                        width="270"
                        cellSpacing="0"
                        cellPadding="0"
                        border="0"
                        align="left"
                      >
                        <tbody>
                          <tr style={{ color: "#0099ff" }}>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "black",
                                borderBottom: "1px solid #333",
                              }}
                            >
                              <b>MOTOR SKILLS</b>
                            </td>
                          </tr>
                          {result?.psychomotor?.map((dom) => (
                            <tr className="center-row" key={dom.name}>
                              <td className="title-box">
                                {dom.name.toUpperCase()}
                              </td>
                              <td className="title-box" align="center">
                                {dom.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td style={{ verticalAlign: "top" }}>
                      <table
                        style={{ margin: "0 7px" }}
                        width="450"
                        cellSpacing="0"
                        cellPadding="0"
                        // border="0"
                      >
                        <tbody>
                          <tr>
                            <td className="title-box">NUMBER OF PUPILS</td>
                            <td className="title-box">
                              {result.numberOfPupils}
                            </td>
                          </tr>
                          <tr>
                            <td className="title-box">NUMBER OF SUBJECTS</td>
                            <td className="title-box">
                              {result?.subjects?.length}
                            </td>
                          </tr>
                          <tr>
                            <td className="title-box">CLASS AVERAGE</td>
                            <td className="title-box">{getClassAverage()}</td>
                          </tr>
                          <tr>
                            <td className="title-box">CHILD'S AVERAGE</td>
                            <td className="title-box">{getChildAverage()}</td>
                          </tr>
                          <tr>
                            <td className="title-box">TERM PERFORMANCE</td>
                            <td className="title-box">{getTermPerf()}</td>
                          </tr>
                          <tr>
                            <td className="title-box">NEXT TERM BEGINS</td>
                            <td className="title-box">
                              {result.nextTermBegins}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table
                style={{ marginTop: "20px" }}
                width="250"
                cellSpacing="0"
                cellPadding="0"
                border="0"
              >
                <tbody>
                  <tr>
                    <td
                      rowSpan="25"
                      width="200"
                      align="right"
                      style={{ verticalAlign: "top" }}
                    >
                      <table
                        style={{ margin: "10px", border: "1px solid black" }}
                        width="270"
                        cellSpacing="0"
                        cellPadding="0"
                        border="0"
                        align="left"
                      >
                        <tbody>
                          <tr style={{ color: "#0099ff" }}>
                            <td
                              style={{
                                fontSize: "14px",
                                color: "black",
                                borderBottom: "1px solid #333",
                              }}
                              colSpan={2}
                            >
                              <b>KEYS TO RATING</b>
                            </td>
                          </tr>

                          <tr className="center-row">
                            <td className="title-box" align="center">
                              N
                            </td>
                            <td className="title-box">Needs Improvement</td>
                          </tr>
                          <tr className="center-row">
                            <td className="title-box" align="center">
                              S
                            </td>
                            <td className="title-box">Satisfactory</td>
                          </tr>
                          <tr className="center-row">
                            <td className="title-box" align="center">
                              O
                            </td>
                            <td className="title-box">
                              oncept/Skill not introduced
                            </td>
                          </tr>
                          <tr className="center-row">
                            <td className="title-box" align="center">
                              1
                            </td>
                            <td className="title-box">
                              Concept/Skill not introduced
                            </td>
                          </tr>
                          <tr className="center-row">
                            <td className="title-box" align="center">
                              2
                            </td>
                            <td className="title-box">Satisfactory Progress</td>
                          </tr>
                          <tr className="center-row">
                            <td className="title-box" align="center">
                              3
                            </td>
                            <td className="title-box">Excellent Progress</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={{ verticalAlign: "top", paddingTop: "10px" }}>
                      <table
                        width="270"
                        cellSpacing="0"
                        cellPadding="0"
                        border="0"
                        align="left"
                      >
                        <tbody>
                          <tr>
                            <td style={{ verticalAlign: "top" }}>
                              <table
                                style={{ margin: "0 7px" }}
                                width="450"
                                cellSpacing="0"
                                cellPadding="0"
                                // border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td className="title-box">
                                      CLASS TEACHER'S COMMENT
                                    </td>
                                    <td className="title-box">
                                      {result.cTeacherComment}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="title-box">
                                      HEAD TEACHER'S COMMENT
                                    </td>
                                    <td className="title-box">
                                      {result.hTeacherComment}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
});

export default ResultView;
