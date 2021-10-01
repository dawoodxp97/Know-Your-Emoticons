import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😀": "Grinning Face",
  "🙃": "Upside-Down Face",
  "🤩": "Star-Struck",
  "🤪": "Zany Face",
};

const emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState(" 👉 Translation will appear here..");

  function handleChange(e) {
    const inpEmoji = e.target.value;
    setEmoji(inpEmoji);
    if (inpEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inpEmoji]);
    } else {
      setMeaning("😥 Failure to recognise this emoji..!! 👎");
    }
  }
  function handleEmojiClick(inpEmoji) {
    setMeaning(emojiDictionary[inpEmoji]);
  }

  return (
    <div className="App">
      <h1>👋 Inside Out..!! 🌈</h1>
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
