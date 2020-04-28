import React, { useState } from "react";
import "./App.css";
import request from "superagent";

const App = () => {
  const [inputField, setInputField] = useState();
  const initialGif = "https://media.giphy.com/media/1qZN5tkAyiykg/giphy.gif";
  const [gif, setGif] = useState(initialGif);
  const onInput = (ev) => {
    const value = ev.target.value;
    setInputField(value);
  };

  const onClickSearch = () => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${inputField}&api_key=dc6zaTOxFJmzC`;
    request.get(url, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      if (res) {
        const index = Math.floor(Math.random() * res.body.data.length);
        console.log(res.body.data);
        setGif(res.body.data[index].images.downsized_large.url);
      }
    });
  };

  return (
    <div className="App">
      <h1>Bringing Swag Back To Housing</h1>
      <input value={inputField} onChange={onInput} />
      <button onClick={onClickSearch}>Search for address</button>
      {gif ? <img src={gif} /> : <div> Can't find gif</div>}
    </div>
  );
};

export default App;
