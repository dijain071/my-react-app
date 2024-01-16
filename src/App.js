import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Select from "react-select";
import styled from "styled-components";

function App() {
  const data = [
    { value: "Option1", label: "Option 1" },
    { value: "Option2", label: "Option 2" },
    { value: "Option3", label: "Option 3" },
    { value: "Option4", label: "Option 4" },
    { value: "Option5", label: "Option 5" },
    { value: "Option6", label: "Option 6" },
  ];

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedValues(selectedOption);
  };

  const customStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      borderRadius: "20px",
      backgroundColor: "#007bff",
      color: "white",
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "white",
      ":hover": {
        backgroundColor: "#0056b3",
      },
    }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with value:", selectedValues);
  };

  const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    margin-top: 20px; /* Adjust the margin-top */
    background-color: #007bff;
    color: #fff;
    margin:20px;
    border: none;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: #0056b3;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  `;
  const WrapperContainer = styled.div`
    display: flex; 
    align-items: flex-end; /* Align items to the bottom */
  `;

  return (
    <div className="App">
      <h1>Task Assignment!</h1>
      <form onSubmit={handleSubmit}>
        <WrapperContainer>
          <div className="wrapper">
            <Select
              isMulti
              options={data}
              value={selectedValues}
              onChange={handleChange}
              placeholder="Select values"
              styles={customStyles}
            />
          </div>
          <SubmitButton type="submit">
            <FontAwesomeIcon icon={faCheck} style={{ marginRight: "5px" }} />
            Submit
          </SubmitButton>
        </WrapperContainer>
      </form>
    </div>
  );
}

export default App;
