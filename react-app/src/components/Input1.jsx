import React, {useState} from "react";


const Input1 = function () {
    const [value, setValue] = useState("")

     return (
        <div>
        <h1><strong>Your surname: {value}</strong></h1>
        <input
        type='text'
        placeholder='Enter your surname...'
        onChange= {value => setValue(value.target.value)}/>
        </div>
     )
}



export default Input1;