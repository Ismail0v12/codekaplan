import React from 'react';
import SpinnerIcon from "../../assets/icons/spinner-icon";

function Spinner() {
  return (
    <div
      style={{
        position: "fixed",
        inset: "0",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <SpinnerIcon/>
    </div>
  );
}

export default Spinner;