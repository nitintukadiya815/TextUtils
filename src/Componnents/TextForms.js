import React, { useState } from 'react';


export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","yes");
    }
    const handleLoClick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","yes")
    }
    const handleClearClick = ()=>{
        console.log("clear was clicked" + text);
        let newText = ("");
        setText(newText)
        props.showAlert("text cleared","yes")
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
       <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="my box" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-3" onClick={handleLoClick}> Convert to lowercase</button>
       <button className="btn btn-primary mx-3" onClick={handleClearClick}> clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.01*text.split(" ").length} minutes to read</p>
        <h3>preview</h3>
        <p>{text.length>0?text:"Enter Something in the above textbox to preview it"}</p>
    </div>
    </>
  )
}

