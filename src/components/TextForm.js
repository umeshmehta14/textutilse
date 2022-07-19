import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to Uppercase","success");
    }
    const handleLoClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to Lowercase","success");
    }
    const handleClearClick = () =>{
        let newtext = '';
        setText(newtext);
        props.showalert("Text cleared","success");
    }
    
    const capitalize = () =>{
         let words = text.split(" ");
         let upperword = '';
         words.forEach(Element => {
          upperword += Element.charAt(0).toUpperCase()+Element.slice(1) + " "
         });
        setText(upperword);
        props.showalert("Each word has been Capitalized","success");
    }
    const foccurrence = () =>{
        // first occurence of a sub string
        let sindex = prompt("Enter word to be search first occurrence index:");
        let position = text.indexOf(sindex);
        alert("First occurrence of "+sindex+" at position is "+position);
    }
    const loccurrence = () =>{
        // last occurence of a sub string
        let sindex = prompt("Enter word to be search last occurrence index:");
        let position = text.lastIndexOf(sindex);
        alert("last occurrence of "+sindex+" at position is "+position);
    }
    
    const replacestring = () =>{
        let repval = prompt("Enter the word to be replaced:");
        let tobereplaced = new RegExp(repval, 'g');
        let toreplace = prompt("Enter the text do you want to replace with "+repval);
        let newtext = text.replace(tobereplaced,toreplace);

        setText(newtext);
        props.showalert("Word Replaced","success");
    }

    const handlecopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copy to clipboard","success");
    }
    const handleSelect = () => {
        let text = document.getElementById("mybox");
        text.select();
        //navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Extra spaces removed","success");
    }


    
    const handleOnChange= (event) =>{
        //console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white': '#151231'}}>
        <h1>{props.heading}</h1>
        {/* <h1>{props.heading} - {text}</h1> */}
    <div className="mb-3">
    <textarea
        className="form-control"
        value={text}
        style = {{backgroundColor : props.mode === 'dark' ? 'gray': 'white',
        color: props.mode === 'dark' ? 'white': '#151231'}}
        onChange ={handleOnChange}
        id="mybox"
        rows="8"
        ></textarea>
      </div>
      <button className="btn btn-dark mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-dark mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-dark mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-dark mx-2 my-2" onClick={replacestring}>Replace word</button>
      <button className="btn btn-dark mx-2 my-2" onClick={foccurrence}>First occurrence</button>
      <button className="btn btn-dark mx-2 my-2" onClick={loccurrence}>Last occurrence</button>
      <button className="btn btn-dark mx-2 my-2" onClick={capitalize}>Capitalize each word</button>
      <button className="btn btn-dark mx-2 my-2" onClick={handlecopy}>Copy Text</button>
      <button className="btn btn-dark mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button className="btn btn-dark mx-2 my-2" onClick={handleSelect}>Select All</button>
      
    </div>
    <div className="conatiner my-2" style={{color: props.mode === 'dark' ? 'white': '#151231'}}>
      <h2>Your text summary</h2>
      <p>{text.length>0 ? text.trim().split(" ").length:0} words and {text.length} characters</p>
      <p>{text.length>0 ? 0.008 * text.split(" ").length:0} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in the textBox above to preview it here"}</p>
    </div>
    </>
  );
}