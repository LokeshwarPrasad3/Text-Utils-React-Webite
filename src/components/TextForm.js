
import React, { useState } from 'react'
// using {useState} when using state


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("UpperCase clicked");
        setText(text.toUpperCase());
        props.showAlert("Converted to upperCase",'success')
    }
    const handleLowClick = () => {
        // console.log("UpperCase clicked");
        setText(text.toLowerCase());
        props.showAlert("Converted to lowerCase",'success')
    }
    const handleSpaceClick = () => {
        // console.log("UpperCase clicked");
        setText(text.split(" ").join(""));
    }

    const handleExtraSpace = () => {
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "));
        props.showAlert("Removed extra space",'success')

    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared texts",'success')
    }
    
    
    // change state of button
    const [copyTxt, setCopied] = useState("Copy Text");
    
    const handleCopyClick = () => {
        if (copyTxt === 'Copy Text') {
            navigator.clipboard.writeText(text);
            // setCopied('Copied');
            props.showAlert("Text is copied",'success')
            setTimeout(() => {
                // setCopied('Copy Text');
            }, 3000);
        }
    }


    const handleOnChange = (event) => {
        // console.log("UpperCase clicked");
        setText(event.target.value);
    }

    // making state means having text and we change value of text using setText function 
    // we directly change useState("changedText");
    const [text, setText] = useState('Enter text here');
    // text = "New text"; // wrong way to 
    // setText("New text"); // correct way to 
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h2>{props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >toUpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick} >toLowerCase</button>
                {/* <button className="btn btn-primary mx-1" onClick={handleSpaceClick} >RemoveSpace</button> */}
                <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick} >{copyTxt}</button>
                <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpace} >remove Extra Space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length} charcters</p>
                <p>Average time to read : {(text.split(" ").length * 0.008 * 60).toFixed(2)} second </p>
                <h3>Preview : </h3>
                <p>{text.length>0?text:"Enter something in the text above to previes here"}</p>
            </div>
            <hr />
        </>
    )
}




// lorem ipsum dolor sit amet consectetur adipisicing elit. provident veritatis ipsam labore dolorem, delectus odit, sapiente corporis reprehenderit enim accusantium mollitia deserunt. autem rerum non unde porro cupiditate velit quam voluptas quia ut cumque molestiae, eligendi dolorum assumenda ea hic eaque voluptates voluptatum natus magnam, ullam fuga. voluptate nulla saepe dolores, odio esse libero suscipit incidunt facere, odit totam officia fugit quod aliquid perferendis! consequuntur fugit nemo officiis, facilis doloremque, corrupti libero a odit, fugiat inventore quos explicabo? recusandae commodi unde quos, magni pariatur praesentium omnis vitae, explicabo accusamus rerum, nam nulla earum fugiat nemo laboriosam assumenda error! reiciendis, at?
