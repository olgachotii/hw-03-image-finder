import React from "react";
import "./Button.scss";

export default function Button({ handleClickButton }) {
  return (
    <div className="Button-container">
      <button type="button" className="Button" onClick={handleClickButton}>
        Load more...
      </button>
    </div>
  );
}
