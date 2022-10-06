import React, { useState } from "react";
import "./InputForm.css";
import { v4 as uuidv4 } from "uuid";

export const InputForm = () => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      deployment: "",
      minPods: "1",
      maxPods: "",
      minRam: "1",
      maxRam: "",
      minVcpu: "1",
      maxVcpu: "",
      storage: "1",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

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
        <button
          type="button"
          class="btn btn-secondary"
          onClick={handleAddFields}
        >
          DEPLOYMENTS +
        </button>
      </div>

      <form className="incontainer" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <div className="row g-3">
              <div className="detailform">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  placeholder="Deployment 1"
                  name="deployment"
                  value={inputField.deployment}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </div>

              <div className="closebtn">
                <button
                  type="button"
                  class="btn btn-outline-primar"
                  disabled={inputFields.length === 1}
                  onClick={() => handleRemoveFields(inputField.id)}
                >
                  X
                </button>
              </div>

              <div className="lane">
                <div className="maininputs">
                  *<label> Min Pods </label>
                  <input
                    type="number"
                    placeholder="1"
                    name="minPods"
                    value={inputField.minPods}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </div>
                <div className="maininputstwo">
                  <label> Max Pods </label>
                  <input
                    type="number"
                    name="maxPods"
                    value={inputField.maxPods}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </div>
              </div>

              <div className="lanetwo">
                <div className="maininputs">
                  *<label> Min RAM </label>
                  <input
                    type="number"
                    placeholder="1"
                    name="minRam"
                    value={inputField.minRam}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </div>
                <div className="maininputstwo">
                  <label> Max RAM </label>
                  <input
                    type="number"
                    name="maxRam"
                    value={inputField.maxRam}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </div>
              </div>

              <div className="lanetwo">
                <div className="maininputs">
                  *<label> Min vCPU </label>
                  <input
                    type="number"
                    placeholder="1"
                    name="minVcpu"
                    value={inputField.minVcpu}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </div>
                <div className="maininputstwo">
                  <label> Max vCPU </label>
                  <input
                    type="number"
                    name="maxVcpu"
                    value={inputField.maxVcpu}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
                </div>
              </div>

              <div className="lanetwo storage">
                <div className="maininput">
                  <label> Storage </label>
                  <input
                    type="number"
                    name="storage"
                    value={inputField.storage}
                    onChange={(event) =>
                      handleChangeInput(inputField.id, event)
                    }
                  />
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
            </div>
          </div>
        ))}
        <div className="nav send">
          <button type="button" class="btn btn-secondary">
            Clear All
          </button>{" "}
          <button
            type="submit"
            class="btn btn-secondary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
