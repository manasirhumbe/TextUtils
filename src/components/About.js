import React, {useState} from 'react';

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color : "black",
  //   backgroundColor: "white"
  // })

  // const [btntext, setBtntext] = useState("Enable Dark Mode")

  // const toggleStyle =() =>{
  //   if(myStyle.color === "black"){
  //     setMyStyle({
  //       color : "white",
  //       backgroundColor: "black",
  //       border:"1px solid white"
  //     })
  //     setBtntext("Enable Light Mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color : "black",
  //       backgroundColor: "white"
  //     })
  //     setBtntext("Enable Dark Mode")
  //   }
  // } 
  let myStyle = {
    color:props.mode ==='dark'?'white':'rgb(36,74,104)',
    backgroundColor: props.mode ==='dark'?'rgb(36,74,104)':'white'
  }
  return (
    <div className='container' style={{color:props.mode ==='dark'?'white':'rgb(36,74,104)'}}>
      <h1>About Us</h1>
              <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count, character count or making the texts in Uppercase/Lowercase.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports number of words and characters. Thus it is suitable for writing with word or character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any browser such as Chrome, Firefox, Internet Explorer, Safari, Opera etc. It suits to count characters in facebook, blog, books, excel document, essays, etc 
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2">
      <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
      </div> */}
    </div>
  );
}
