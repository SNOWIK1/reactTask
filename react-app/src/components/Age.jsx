import React, {useState} from "react";

const Age = function () {
    const [value, setValue] = useState("")
    
   
    
     return (
        <div>
        <h1><strong>You're {value} y.o.</strong></h1>
        <input
        type='text'
        placeholder='Enter your age...'
        onChange= {value => setValue(value.target.value)}/>
        </div>
     )

     }


export default Age;