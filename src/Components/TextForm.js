import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was click" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoClick=()=>{
        // console.log("LowerCase was click" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower","success")
    }

    const handleClearClick=()=>{
        // console.log("Clear Text" + text);
        let newText= '';
        setText(newText);
        props.showAlert("Clear Text","success")
    }

    const handleCopyClick=()=>{
        let text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy text","success")
    }

    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra spaces","success")
    }



    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text= "new text"; wrong way to change the state
    // setText("new text"); correct way to change the state
    return (
        <>
        <div className='container'  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 >{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value= {text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LoweCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>


        <div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}} >
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length } Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to Preview it here"}</p>
        </div>
        </>
    )
}
