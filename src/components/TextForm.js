import React, {useState} from 'react';

export default function TextForm(props) {

  const handleUpClick =() =>{
    // console.log("Uppercase was click" + text)
    let newtext  = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase", "success")
  }

  const handleLoClick =() =>{
    // console.log("Uppercase was click" + text)
    let newtext  = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to lowercase", "success")
  }

  const handleOnChange =(event) =>{
    // console.log("Handled on change")
    setText(event.target.value)
  }

  const handleClClick = () => {
    setText(" ")
    props.showAlert("Text cleared", "success")
  }
  
  const handleCopy = () => {
    // let copytext = document.getElementById("myBox")
    // copytext.select();
    navigator.clipboard.writeText(text);
    // navigator.clipboard.writeText(copytext.value);
    // document.getSelection().removeAllRanges();
    // alert("Copied the text: " + copytext.value)
    props.showAlert("Copied to clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("All extra spaces are removed", "success")

  }

  const [text, setText] = useState(" ");

  return (
    <>
    <div className='container' style={{color : props.mode==="dark"?"white":"black"}}>
      <h1 className='mb-4'>{props.heading}</h1>    
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="dark"?"#042743":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick= {handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick= {handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick= {handleClClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick= {handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick= {handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container" style={{color : props.mode==="dark"?"white":"black"}}>
      <h2>Your text summary</h2>
      <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length }</b> characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview "}</p>
    </div>
    </>
  );
}

