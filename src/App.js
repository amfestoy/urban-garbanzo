import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputField, setInputField] = useState();
  const onInput = (ev) => {
    const value = ev.target.value;
    setInputField(value);
  };

  const onClickSearch = () => {
    // use inputField value to search
  };

  return (
    <div className="App">
      <h1>Bringing Swag Back To Housing</h1>
      <input value={inputField} onChange={onInput} />
      <button onClick={onClickSearch}>Search for address</button>
    </div>
  );
};

export default App;
