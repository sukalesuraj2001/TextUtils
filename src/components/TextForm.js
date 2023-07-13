import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log(" uppercase was click"+text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick=()=>{
        // console.log(" uppercase was click"+text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick=()=>{
        // console.log(" uppercase was click"+text)
        let newText ='';
        setText(newText)
        props.showAlert("Text to be Cleard","success")
    } 
    const handleRevClick = () => {
      let nText = text.split(" ");
      let rev = nText.reverse();
      let newText = rev.join(" ");
      // console.log(newText)
      setText(newText)
      props.showAlert("Text to be Reversed","success")
    };
    
 const handleOnChange=(event)=>{
        // console.log(" On change")
        setText(event.target.value)

    }

    const [text,setText]=useState("")
    // used state for set text
    
  return (
    <>
    <div className="container mt-5" style={{color:props.mode === 'dark'?'white':'#042743'}} >
      <div className=" mb-3">
        <label htmlFor="one" className="form-label fw-bold">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="one" value={text} onChange={handleOnChange}
          rows="3"style={{backgroundColor:props.mode ==='dark'?'grey':'White',color:props.mode === 'dark'?'white':'black'}}
        ></textarea>
      </div>
      <div className="container">
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary ms-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary ms-2" onClick={handleRevClick}>Reverse The Text</button>
      <button className="btn btn-primary ms-2" onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>
    <div className="container my-3"style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your Text Summery</h2>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008*text.split(" ").length} Minute read</p>
      <h2>Preview</h2>
      <h6>{text.length>0?text:'Enter Something In The Textbox Above to Preview It !'}</h6>
    </div>
    </>
  );
}
