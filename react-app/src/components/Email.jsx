import React, {useState} from "react";


const Email = function () {
    const [value, setValue] = useState("")

     return (
        <div>
        <h1>Your email: {value}</h1>
        <input
        type='text'
        placeholder='example@mail.com'
        onChange= {value => setValue(value.target.value)}/>
        </div>
     )
}



export default Email;