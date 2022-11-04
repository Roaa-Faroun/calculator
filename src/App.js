import { useState } from "react";
import "./App.css";
import Result from "./componants/results/results.componant";
function App() {
  let [firstNum, setFirstNum] = useState("");
  let [secondNum, setSecondNum] = useState("");
  let [operation, setOperation] = useState("");
  let [answer, setAnswer] = useState("");
  const reRender = () => {
    setFirstNum("");
    setSecondNum("");
    setOperation("");
    setAnswer("");
  };
  const getvalues = (val) => {
    let result;
    if (isNaN(parseInt(val.target.value)) === false && answer !== "") {
      reRender();
      setFirstNum("" + val.target.value);
    } else if (
      isNaN(parseInt(val.target.value)) === false &&
      operation === ""
    ) {
      setFirstNum(firstNum + val.target.value);
    } else if (
      isNaN(parseInt(val.target.value)) === false &&
      operation !== ""
    ) {
      setSecondNum(secondNum + val.target.value);
    } else if (
      isNaN(parseInt(val.target.value)) === true &&
      val.target.value !== "="
    ) {
      setOperation(val.target.value);
    } else if (
      isNaN(parseInt(val.target.value)) === true &&
      val.target.value === "="
    ) {
      if (operation === "+") {
        result = parseInt(firstNum) + parseInt(secondNum);
      } else if (operation === "-") {
        result = parseInt(firstNum) - parseInt(secondNum);
      }
      setAnswer(result);
    }
  };

  return (
    <div className="App">
      <Result
        answer={answer}
        firstNum={firstNum}
        secondNum={secondNum}
        operation={operation}
      />
      {/* <div className="result">
        {firstNum !== "" ? <span>{firstNum} </span> : ""}
        {operation !== "" ? <span>{operation}</span> : ""}
        {secondNum !== "" ? <span> {secondNum}</span> : ""}
        {answer !== "" ? (
          <span className="res">
            {" "}
            = <Result  />
          </span>
        ) : (
          ""
        )}
      </div> */}

      <div>
        <button value={1} onClick={(val) => getvalues(val)}>
          1
        </button>
        <button value={2} onClick={(val) => getvalues(val)}>
          2
        </button>
        <button value={3} onClick={(val) => getvalues(val)}>
          3
        </button>
        <button value={4} onClick={(val) => getvalues(val)}>
          4
        </button>
        <button value={5} onClick={(val) => getvalues(val)}>
          5
        </button>
        <button value={6} onClick={(val) => getvalues(val)}>
          6
        </button>
        <button value={7} onClick={(val) => getvalues(val)}>
          7
        </button>
        <button value={8} onClick={(val) => getvalues(val)}>
          8
        </button>
        <button value={9} onClick={(val) => getvalues(val)}>
          9
        </button>
        <button value={0} onClick={(val) => getvalues(val)}>
          0
        </button>
        <button
          value={"+"}
          onClick={(val) => getvalues(val)}
          className="operation"
        >
          +
        </button>
        <button
          value={"-"}
          onClick={(val) => getvalues(val)}
          className="operation"
        >
          -
        </button>
        <button value={"="} onClick={(val) => getvalues(val)} className="equal">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
