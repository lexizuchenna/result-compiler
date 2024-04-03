import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import ResultView from "../components/Result";

function Result() {
  const [result, setResult] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const serializedData = searchParams.get("data");
    if (!serializedData) return navigate("/");
    const result = JSON.parse(decodeURIComponent(serializedData));
    console.log(result);

    setResult(result);
    return () => setResult({});
  }, []);

  const printRef = useRef();

  const print = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "Result Print",
  });

  const onEdit = () => navigate(`/edit-result/${result.id}`);

  return (
    <>
      <div className="row justify-content-center">
        <div className="order-xl-1 col-xl-12">
          <div className="bg-secondary shadow card">
            <div className="bg-white border-0 card-header">
              <div className="align-items-center justify-content-between row">
                <div className="text-md  col-6">
                  <button className="btn btn-dark btn-sm" onClick={onEdit}>
                    Edit
                  </button>
                </div>
                <div className="text-md text-right col-6">
                  <button className="btn btn-danger btn-sm" onClick={print}>
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResultView result={result} ref={printRef} />
    </>
  );
}

export default Result;
