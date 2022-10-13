import React, { useState } from "react";
import { InputForm } from "./InputForm";
import { Aboutus } from "./Aboutus";

export const Nav = () => {
  const [showHome, setHomeShow] = useState(true); //code for deployment

  return (
    <div>
      <div className="nav">
        <button
          type="button"
          onClick={() => setHomeShow(true)}
          className="btn btn-outline-primary"
        >
          Home
        </button>{" "}
        <button
          type="button"
          onClick={() => setHomeShow(false)}
          className="btn btn-outline-primary"
        >
          About Us
        </button>
      </div>

      <div>
        {showHome ? (
          <div className="App">
            <InputForm />
          </div>
        ) : (
          <div className="App">
            <Aboutus />
          </div>
        )}
      </div>
    </div>
  );
};
