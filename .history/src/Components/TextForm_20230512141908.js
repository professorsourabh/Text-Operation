import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleUpChange = (event) => {

        setText(event.target.value);
    }
    const handleToLower = (event) => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LoweCase!","success");
    }
    const handleClearAll = (event) => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear All!","success");
    }
    

    const [text, setText] = useState('');

    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove all white space from text","success");
    }
  

    return (<>
        <div className="container" >
            
            <div className='container' style={{color: props.mode ==='dark'?'white':'black'}} >

                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea style={{backgroundColor:props.mode==='dark'?'grey':'light'
                     ,color: props.mode ==='dark'?'white':'black'}}   value={text} rows="8" onChange={handleUpChange} className="form-control" id="myBox">
                    </textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

                <button className="btn btn-info mx-2 my-2" onClick={handleToLower}>Convert to Lowercase</button>
                <button className="btn btn-info my-2 mx-2" onClick={handleClearAll}>Clear All</button>
                <button className="btn btn-dark my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>

            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something here...."}</p>
            </div>
        </div>
    </>
    )
}
