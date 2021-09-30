import React, { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" /** add some more to show how the app now expands when there's new data */,
};

/**
 * Bonus feature
 * converting an object to array of keys
 */
const emojis = Object.keys(emojiDictionary);

function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("Failure to recognise this emoji");
    }
  }
  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Inside Out..!!</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        className="input"
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span onClick={() => emojiClickHandler(emoji)} className="emoji">
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
export default App;
