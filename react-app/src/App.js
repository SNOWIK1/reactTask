import React from 'react';
import Age from './components/Age';
import Email from './components/Email';
import Input from './components/Input'
import Sender from './components/Sender';
//import Calculator from './components/Calculator';
import Radio from './components/Radio';
import Input1 from './components/Input1';
import './styles/App.css'
function App() {


  return (
    <body>
    <div className="App">
     <h1 class="main ">We will glad to see you in our company</h1>
     <p>But before you should fill the next fields...</p>
       <div class="info">
         <Input/>
         <Input1/>
         <Radio/>
         <Age/>
         <Email/>
       </div>
        <Sender class="sender"/>
    </div>
    </body>
  );
}

export default App;
