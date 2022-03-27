import React from "react";
import "./row.css";

const Row = ({ index, answer, borderColor }) => {
  return (
    <div style={{ background: borderColor }} className="box">
      {answer[index]}
    </div>
  );
};

export default Row;
