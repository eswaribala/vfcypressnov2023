import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App(props) {
    const {firstName:propsFirstName}=props
    const[firstName,setFirstName]=useState(propsFirstName,"")
    const[inputs,setInputs]=useState({})
    let handleOnChange=function(event){
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))
        console.log(event.target.name);
        console.log(event.target.value);
        console.log(inputs.firstName)
    }
  return (
    <div className="App">
       {/*Test h1 has text or contains
       text as Vodafone Recharge*/
       }
       <h1>Vodafone Recharge</h1>
        {/*Test paragraph length to be 3 and
            test 2nd paragraph contains postpaid*/}
        <p>
            Prepaid
        </p>
        <p>
            Postpaid
        </p>
        <p>
            Broadband
        </p>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleOnChange}/>
        <p>{inputs.firstName}</p>
    </div>
  );
}

export default App;
