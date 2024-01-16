import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import styled from "styled-components";

function App() {
  const data = [
    { value: "Option1", label: "Option 1" },
    { value: "Option2", label: "Option 2" },
    { value: "Option3", label: "Option 3" },
  ];

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedValues(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with value:", selectedValues);
  };

  const SubmitButton = styled.button`
    padding: 10px;
    font-size: 16px;
    margin-right: 10px; 
    margin-left: 150px; 
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: #0056b3;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  `;

  return (
    <div className="App">
      <h1>Task Assignment!</h1>

      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <Select
            isMulti
            options={data}
            value={selectedValues}
            onChange={handleChange}
            placeholder="Select values"
          />
        </div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </div>
  );
}

export default App;
