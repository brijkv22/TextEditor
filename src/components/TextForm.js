import React, { useState } from 'react'
import './TextForm.css';


// console.log(useState('Enter text here'))
export default function TextForm(props) {
    const handleUpClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
        //  console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleOnChange = (Event) => {
        // console.log("ON Change");
        setText(Event.target.value);
    }
    const handleCopy = () => {
        //console.log("I am Copying")
        const text = document.getElementById("myBox");
        text.select();
        // navigator.clipboard.writeText(text.value);
        alert("Copied the text: " + text.value);
        props.showAlert("Text copied", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const [text, setText] = useState('')
    //text = "new text"; // Wrong way to change the state
    // setText ("new text"); // Correct way to change the state 
    return (
        <>
            <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
                <div className='TextForm1'>
                    <div className='TextForm6'>Type</div>
                    <div className='TextForm7'>
                        <span>Your Text Here!</span>
                    </div>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#dda8a8':'white', color:props.mode === 'dark'?'#251e89':'black'}} rows="8"></textarea>
                </div>
            
                <div className="d-grid gap-2 d-md-block">
                    <button disabled={text.length ===0} className="btn btn-primary mx-2" type='button' onClick={handleUpClick} >Convert to Uppercase</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2" type='button' onClick={handleLoClick} >Convert to Lowercase</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2" type='button' onClick={handleClearClick} >Clear Text</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2" type='button' onClick={handleCopy} >Copy Text</button>
                    <button disabled={text.length ===0} className="btn btn-primary mx-2 TextForm8" type='button' onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                </div>
            </div>
            <div className="container">
                <div className='TextForm2'>See your text summary</div>
                <p className='TextForm3'>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} character</p>
                <p className='TextForm3'> {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minute character read </p>
                <p className='TextForm5'>{text.length>0?text:"Enter your text in box to preview here!"}</p>
            </div>
        </>
    )
}
