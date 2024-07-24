import { useState } from "react";
import React from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");
  let newText = text.toUpperCase();
  let newText2 = text.toLowerCase();

  const handleUpcClick = () => {
    setText(newText);
    props.showAlert("Converted To Uppercase!", "success")
  };

  const handleLoClick = () => {
    setText(newText2);
    props.showAlert("Converted To Lowercase!", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let text = "";
    setText(text);
    props.showAlert("Text Cleared!", "success")
  };

  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Has Been Copied!", "success")
  };

  const capitalize = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    let words = text.value.split(" ");
    for (let i = 0; i < words.length; i++) {
     words[i] =
        words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
        setText(words.join(' '));
      }
      props.showAlert("Capitalizated Successfully!", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces have been removed!", "success")
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div>
          
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {props.query}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
<<<<<<< Updated upstream
              rows={8}
              onChange={handleOnChange}
              style={{backgroundColor: props.mode==="light"? "white" : "#102f5e", color: props.mode==='light'? 'black' : 'white', cursorColor:props.mode==='light'? 'black' : 'white'}}
=======
              rows={12}
              onChange={handleOnChange}
              style={{backgroundColor: props.mode==="light"? "white" : "#102f5e", color: props.mode==='light'? 'black' : 'white', cursorColor:props.mode==='light'? 'black' : 'white', resize: 'none', border: '2px solid gray'}}
>>>>>>> Stashed changes
              value={text}
            />
          </div>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpcClick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}>
          Convert To Lowerrcase
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={copyText}>
          Copy Text to Clipboard
        </button>
        <button disabled={text.length===0}
          className="btn btn-warning mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Clear Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-warning mx-2 my-1" onClick={capitalize}>
          Capitalize
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words & {text.length} Characters
        </p>
        <p>{0.008 * (text.split(/\s+/)).filter((element)=>{return element.length!== 0}).length} Minutes to Read</p>
        <h2>Preview:</h2>
        <div className="container pd-1" style={{marginBottom: '5px', padding: '20px', backgroundColor: props.mode==='light'? 'grey' : 'black', color: props.mode==='light'? 'black' : 'white'}}>
          <p className="text">{text.length>0?text:'Nothing To Preview!'}</p>
        </div>
      </div>
    </>
  );
}
