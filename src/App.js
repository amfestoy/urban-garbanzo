import React, { useState } from "react";
import "./App.css";
import request from "superagent";

const App = () => {
  const [inputField, setInputField] = useState();
  const [gif, setGif] = useState();
  const onInput = (ev) => {
    const value = ev.target.value;
    setInputField(value);
  };

  const onClickSearch = () => {
    // use inputField value to search
    const url = `http://api.giphy.com/v1/gifs/search?q=${inputField}&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      console.log(res.body.data);
      const index = Math.floor(Math.random() * res.body.data.length);
      setGif(res.body.data[index]);
    });
  };

  return (
    <div className="App">
      <h1>Bringing Swag Back To Housing</h1>
      <input value={inputField} onChange={onInput} />
      <button onClick={onClickSearch}>Search for address</button>
      {gif && <img src={gif.images.downsized_large.url} />}
    </div>
  );
};

export default App;
