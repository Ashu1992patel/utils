import React, { useState } from "react";
import Button from "./common/Button";
import Card from "./common/Card";

export default function Utility(props) {
  const [content, setContent] = useState("");
  const [text, setText] = useState("");
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [wordCapital, setWordCapital] = useState(false);
  const [trim, setTrim] = useState(false);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);

  const textHandler = (event) => {
    setContent(event.target.value);
    setWords(text.length);
    setCharacters(text.split(" ").length);
    if (lower) {
      toLowerCaseHandler();
    } else if (upper) {
      toUpperCaseHandler();
    } else if (wordCapital) {
      wordCapitalize();
    } else if (trim) {
      trimHandler();
    } else {
      setText(event.target.value);
    }
  };

  const toUpperCaseHandler = () => {
    setUpper(true);
    setLower(false);
    setWordCapital(false);
    setTrim(false);
    setText(content.toUpperCase());
    props.showAlert("success", "Text has been set to upper case");
  };

  const toLowerCaseHandler = () => {
    setUpper(false);
    setLower(true);
    setWordCapital(false);
    setTrim(false);
    setText(content.toLocaleLowerCase());
    props.showAlert("success", "Text has been set to lower case");
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Formatted text has been copied in clipboard");
  };

  const copyOriginalHandler = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      props.showAlert("success", "Original text has been copied in clipboard.");
    }
  };

  const clearAllNewHandler = () => {
    let newText = "";
    // setContent(newText);
    setText(newText);
    props.showAlert("success", "Formatted text has been cleared.");
  };

  const trimHandler = () => {
    setUpper(false);
    setLower(false);
    setWordCapital(false);
    setTrim(true);
    let newText = content.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Extra spaces has been removed.");
  };

  const wordCapitalize = () => {
    setUpper(false);
    setLower(false);
    setWordCapital(true);
    setTrim(false);
    let newContent = content.split(" ");
    newContent = newContent.map(function (element, index) {
      return element.charAt(0).toUpperCase() + element.slice(1);
    });
    newContent = newContent.join(" ");
    setText(newContent);
    props.showAlert("success", "Each letter of all the words has been capitalized.");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-5">
          <h1>Input:</h1>
          <textarea
            className="form-control mt-3"
            placeholder="Please provide your input..."
            rows="8"
            onChange={textHandler}
            style={{
              backgroundColor: props.mode === "dark" ? "#8e8b9f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onPaste={textHandler}
            defaultValue={content}
          ></textarea>

          <Button name="To Upper Case" event={toUpperCaseHandler} />
          <Button name="To Lower Case" event={toLowerCaseHandler} />
          <Button name="Word Capitalize" event={wordCapitalize} />
          <Button name="Trim" event={trimHandler} />
          <Button name="Copy Text" event={copyOriginalHandler} />
        </div>
        <div className="col-sm-2 mt-5">
          <Card
            name="Characters Count"
            style={{ color: props.mode === "dark" ? "#534d6e" : "black" }}
            count={words}
          />
          <Card
            name="Words Count"
            style={{ color: props.mode === "dark" ? "#534d6e" : "black" }}
            count={characters}
          />
        </div>
        <div className="col-sm-5 mt-2">
          <h1>Output:</h1>

          <textarea
            className="form-control"
            placeholder="Output..."
            rows="8"
            readOnly
            style={{
              backgroundColor: props.mode === "dark" ? "#8e8b9f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            defaultValue={text}
          ></textarea>

          <Button name="Copy Text" event={copyHandler} />
          <Button name="Clear All" event={clearAllNewHandler} />
        </div>
      </div>
    </div>
  );
}
