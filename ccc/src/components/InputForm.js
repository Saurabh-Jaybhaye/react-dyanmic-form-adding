import React from "react";
import "./InputForm.css";

export const InputForm = () => {
  return (
    <div className="topdiv">
      <div className="nav">
        <button type="button" class="btn btn-outline-primary">
          Home
        </button>{" "}
        <button type="button" class="btn btn-outline-primary">
          About Us
        </button>
      </div>

      <div className="nav">
        <button type="button" class="btn btn-secondary">
          DEPLOYMENTS
        </button>{" "}
        <button type="button" class="btn btn-secondary">
          DEPLOYMENTS +
        </button>
      </div>

      <center>
        <div className="incontainer ">
          <form className="row g-3">
            <div className="detailform">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                placeholder="Deployment 1"
              />
            </div>

            <div className="closebtn">
              <button type="button" class="btn btn-outline-primar">
                X
              </button>
            </div>

            <div className="lane">
              <div className="maininputs">
                *<label> Min Pods </label>
                <input type="number" placeholder="1" />
              </div>
              <div className="maininputstwo">
                <label> Max Pods </label>
                <input type="number" />
              </div>
            </div>

            <div className="lanetwo">
              <div className="maininputs">
                *<label> Min RAM </label>
                <input type="number" placeholder="1" />
              </div>
              <div className="maininputstwo">
                <label> Max RAM </label>
                <input type="number" />
              </div>
            </div>

            <div className="lanetwo">
              <div className="maininputs">
                *<label> Min vCPU </label>
                <input type="number" placeholder="1" />
              </div>
              <div className="maininputstwo">
                <label> Max vCPU </label>
                <input type="number" />
              </div>
            </div>

            <div className="lanetwo storage">
              <div className="maininput">
                <label> Storage </label>
                <input type="number" />
              </div>
            </div>

            <div className="reset">
              <button type="button" class="btn btn-outline-primar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-bootstrap-reboot"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.161 8a6.84 6.84 0 1 0 6.842-6.84.58.58 0 1 1 0-1.16 8 8 0 1 1-6.556 3.412l-.663-.577a.58.58 0 0 1 .227-.997l2.52-.69a.58.58 0 0 1 .728.633l-.332 2.592a.58.58 0 0 1-.956.364l-.643-.56A6.812 6.812 0 0 0 1.16 8z" />
                  <path d="M6.641 11.671V8.843h1.57l1.498 2.828h1.314L9.377 8.665c.897-.3 1.427-1.106 1.427-2.1 0-1.37-.943-2.246-2.456-2.246H5.5v7.352h1.141zm0-3.75V5.277h1.57c.881 0 1.416.499 1.416 1.32 0 .84-.504 1.324-1.386 1.324h-1.6z" />
                </svg>
                <br />
                Reset
              </button>
            </div>

            <div className="reset">
              <button type="button" class="btn btn-outline-primar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                <br />
                Done
              </button>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
};
