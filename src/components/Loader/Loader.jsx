import React from "react";
import { Audio } from "react-loader-spinner";
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="Loader">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
        className="true"
      />
    </div>
  );
}
