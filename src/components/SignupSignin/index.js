import React, { useState } from 'react';
import "./styles.css";
import Input from '../input';
import Button from '../Button';

function SignUpSingInComponent() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

function signupWithEmail(){
  console.log(name,"name");
  console.log(email,"email");
}
  return (
    <div className='signup-wrapper'>
    <h2 className='title'>Sign Up on <span style={{color:"var(--theme)"}}>FinanceFusion</span>
    </h2>
    <form>
      <Input label={"Full Name"} state={name}
      setState={setName}
      placeholder={"John Doe"} /> 
      <Input label={"Email"} state={email}
      setState={setEmail}
      placeholder={"johndoe@gmail.com"} /> 
      <Input label={"Password"} state={password}
      setState={setPassword}
      placeholder={"example@123"} /> 
      <Input label={"Confirm Password"} state={confirmPassword}
      setState={setConfirmPassword}
      placeholder={"example@123"} />
      <Button text={ "Signup Using Email and Password" onClick={signupWithEmail} } />
      <p style={{textAlign:"center"}}>or</p>
      <Button text={ "Signup Using Google" } blue={true}/>
    </form>
</div>
  )
}

export default SignUpSingInComponent