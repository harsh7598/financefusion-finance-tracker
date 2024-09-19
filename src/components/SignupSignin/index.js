import React, { useState } from "react";
import "./styles.css";
import Input from "../input";
import Button from "../Button";

function SignUpSingInComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signupWithEmail() {
    console.log("Name", name);
    console.log("Email", email);
    console.log("password", password);
    console.log("confirmpassword", confirmPassword);
    //Authentication of user using email and password
    
  }
  return (
    <div className="signup-wrapper">
      <h2 className="title">
        Sign Up on <span style={{ color: "var(--theme)" }}>FinanceFusion</span>
      </h2>
      <form>
        <Input
          label={"Full Name"}
          state={name}
          setState={setName}
          placeholder={"John Doe"}
        />
        <Input
          type="email"
          label={"Email"}
          state={email}
          setState={setEmail}
          placeholder={"johndoe@gmail.com"}
        />
        <Input
          type="password"
          label={"Password"}
          state={password}
          setState={setPassword}
          placeholder={"example@123"}
        />
        <Input
          type="password"
          label={"Confirm Password"}
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"example@123"}
        />
        <Button
          text={"Signup Using Email and Password"}
          onClick={signupWithEmail}
        />
        <p style={{ textAlign: "center" }}>or</p>
        <Button text={"Signup Using Google"} blue={true} />
      </form>
    </div>
  );
}

export default SignUpSingInComponent;
