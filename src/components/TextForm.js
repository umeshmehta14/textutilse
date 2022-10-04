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
        // let text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges(); //for deselect

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
    <div className="container" style={{color: props.mode === ((props.mode === 'success')|| (props.mode === 'warning') || (props.mode === 'light') || (props.mode === 'danger') ) 
    ?"black" : (props.mode === 'dark') ? "white" : (props.mode === 'primary')? "white" : "black"}}>
        <h1>{props.heading}</h1>
        {/* <h1>{props.heading} - {text}</h1> */}
    <div className="mb-3">
    <textarea
        className="form-control"
        value={text}
        // style = {{backgroundColor : props.mode === 'dark' ? '#675d87': 'white',
        // color: props.mode === 'dark' ? 'white': '#151231'}}
        style = {{backgroundColor : (props.mode === 'dark') 
        ? "rgb(12,12,12"
        : (props.mode === 'success') 
        ? "rgb(205 236 211)"
        : (props.mode === 'primary')
        ? "#a2b9ff"
        : (props.mode === 'warning')
        ? "rgb(245 244 193)"
        : (props.mode === 'danger')
        ? "rgb(216 164 178)":"white",
        color: props.mode === 'dark' ? 'white': 'black'}}
        onChange ={handleOnChange}
        id="mybox"
        rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`}  onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={replacestring}>Replace word</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={foccurrence}>First occurrence</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={loccurrence}>Last occurrence</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={capitalize}>Capitalize each word</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={handlecopy}>Copy Text</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button disabled={text.length===0} className={`btn btn-${(props.mode === 'dark') 
    ? "light"
    : (props.mode === 'success') 
    ? "success"
    : (props.mode === 'primary')
    ? "info"
    : (props.mode === 'warning')
    ? "warning"
    : (props.mode === 'danger')
    ? "danger":"dark"} mx-1 my-1`} onClick={handleSelect}>Select All</button>
      
    </div>
    <div className="conatiner my-2" style={{color: props.mode === ((props.mode === 'success')|| (props.mode === 'warning') || (props.mode === 'light') || (props.mode === 'danger') ) 
    ?"black" : (props.mode === 'dark') ? "white" : (props.mode === 'primary')? "white" : "black"}}>
      <h2>Your text summary</h2>
      {/* <p>{text.length>0 ? text.trim().split(" ").length:0} words and {text.length} characters</p> */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      {/* <p>{text.length>0 ? 0.008 * text.split(" ").length:0} Minutes Read</p> */}
      <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  );
}