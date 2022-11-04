import "./results.css";
const Result = (props) => {
  return (
    <div className="result">
      {props.firstNum !== "" ? <span>{props.firstNum} </span> : ""}
      {props.operation !== "" ? <span>{props.operation}</span> : ""}
      {props.secondNum !== "" ? <span> {props.secondNum}</span> : ""}
      {props.answer !== "" ? <span className="res">= {props.answer}</span> : ""}
    </div>
  );
};
export default Result;
