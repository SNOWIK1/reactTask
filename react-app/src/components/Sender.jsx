import React, {useState} from "react";

const Sender = function () {
    let [res,setRes] = useState("")
    
    function send () {
        setRes(res="Your request was sent!")
    }
    
     return (
        <div>
       <br/>
       <button onClick={send}>Send</button>
       <h1>{res}</h1>
        </div>
     )

     }


export default Sender;