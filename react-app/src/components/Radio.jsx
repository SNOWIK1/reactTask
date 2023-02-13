import React, {useState} from 'react';


const Radio = function () {

let[sex, setSex] = useState("")

function femalize () {
   setSex(sex="female")
}

function malify () {
    setSex(sex="male")
}

return (
    <div>
    <h1>Your sex is: {sex}</h1>
    <input type="radio" onClick={malify}/>
    <label>Male</label>
    <input type="radio" onClick={femalize}/>
    <label>Female</label>
    </div>


)

}

export default Radio;