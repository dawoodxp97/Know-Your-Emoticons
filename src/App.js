import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "ð": "Smiling",
  "ðģ": "disbelief",
  "ð": "sad",
  "ðĨĄ": "takeout box",
  "âĪïļ": "love",
  "ð": "annoyance",
  "ð": "Grinning Face",
  "ð": "Upside-Down Face",
  "ðĪĐ": "Star-Struck",
  "ðĪŠ": "Zany Face",
};

const emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(" ð Translation will appear here..");

  function handleChange(e) {
    const inpEmoji = e.target.value;
    setEmoji(inpEmoji);
    if (inpEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inpEmoji]);
    } else {
      setMeaning("ðĨ Failure to recognise this emoji..!! ð");
    }
  }
  function handleEmojiClick(inpEmoji) {
    setMeaning(emojiDictionary[inpEmoji]);
  }

  return (
    <div className="App">
      <h1>ð Inside Out..!! ð</h1>
      <input
        onChange={handleChange}
        value={emoji}
        placeholder={"Search your emoji"}
        className="input"
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji, key) => (
        <span
          key={key}
          onClick={() => handleEmojiClick(emoji)}
          className="emoji"
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
export default App;
