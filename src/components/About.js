import React from "react";
// import { useState } from "react";

export default function About(props) {

    // const [mystyle, setmystyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white' 
    // })
      let mystyle = {
        color: props.mode === ((props.mode === 'success')|| (props.mode === 'warning') || (props.mode === 'light') || (props.mode === 'danger') ) 
    ?"black" : (props.mode === 'dark') ? "white" : (props.mode === 'primary')? "black" : "black",
        backgroundColor : (props.mode === 'dark') 
        ? "rgb(12,12,12"
        : (props.mode === 'success') 
        ? "rgb(205 236 211)"
        : (props.mode === 'primary')
        ? "#a2b9ff"
        : (props.mode === 'warning')
        ? "rgb(245 244 193)"
        : (props.mode === 'danger')
        ? "rgb(216 164 178)":"white"
      }
  return (
    <div className="container" style={{color: props.mode === ((props.mode === 'success')|| (props.mode === 'warning') || (props.mode === 'light') || (props.mode === 'danger') ) 
    ?"black" : (props.mode === 'dark') ? "white" : (props.mode === 'primary')? "white" : "black"}}>
        <h1 className="my-2"><em>About Us</em></h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            Word counter is a breathtaking tool that we have created to assist you in calculating and counting the actual characters of your written stuff. This tool is explicitly developed to deliver precise outcomes and inform you how short or long your content is.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             < strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Word Counter is a free character tool that provides instant character count & word count statistics for a given text. Word Counter reports the number of words and characters. thus it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any Browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook,blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
