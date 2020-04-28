import React, { useState } from "react";
import "./App.css";
import request from "superagent";
import "nes.css/css/nes.min.css";

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
        setGif(undefined);
        return;
      }
      if (res) {
        const index = Math.floor(Math.random() * res.body.data.length);
        setGif(res.body.data[index].images.downsized_large.url);
      }
    });
  };

  return (
    <div className="App">
      <div className="App-white-container">
        <div className="nes-container with-title">
          <h1 className="nes-text is-primary" className="title">
            Bringing Swag Back To Housing
          </h1>
          <div>
            <input
              value={inputField}
              onChange={onInput}
              className="nes-input"
            />
            <button onClick={onClickSearch} className="nes-btn is-success">
              Search for gif
            </button>
          </div>
          {gif ? <img src={gif} /> : <div> Can't find gif</div>}
        </div>
      </div>
    </div>
  );
};

export default App;
