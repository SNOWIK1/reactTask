import React, {useState} from "react";


const Input = function () {
    const [value, setValue] = useState("")

     return (
        <div>
        <h1><strong>Your name: {value}</strong></h1>
        <input
        type='text'
        placeholder='Enter your name...'
        onChange= {value => setValue(value.target.value)}/>
        </div>
     )
}



export default Input;