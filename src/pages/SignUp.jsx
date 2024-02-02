import React from "react";
// import Print from "../components/Print";

export default function SignUp(props) {

 /*  let [counter,setCounter] = React.useState(0);  //conter update using state variable
  const onSave = () => {
    setCounter(counter+=1);
}  */

  let[email, setEmail] = React.useState('');
  let[emailError, setEmailError] = React.useState('');

  let[password, setPassword] = React.useState('');
  let[passwordError, setPasswordError] = React.useState('');

  const onEmailChange = (e) => {
   setEmail(e.target.value) ;
}
const onPasswordChange= (e) => {
  setPassword(e.target.value);
}

const onSave = () => {
  if(!email){
    setEmailError("Email is mandatory");
  }else{
    setEmailError(false);
  }

  if(!password){
    setPasswordError("Password is mandatory");
  }else{
    setPasswordError(false);
  }
}
   /*  const onType = (e) => {
        console.log(e.target.value);
    } */

  return (
    <div className="signup">
      <div className="container col-lg-6 mt-3">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          {/* <Print data = {counter}/> */}
          <h2>Signup Form</h2>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input onKeyUp={onEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="example@gmail.com" 
            />
            {emailError && <small className="danger">{emailError}</small>}
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input onKeyUp={onPasswordChange} type="password" className="form-control"
             id="exampleInputPassword1" placeholder="Password must be atleast of 8 characters"/>
             {passwordError && <small className="danger">{passwordError}</small>}
          </div>
          <button onClick={onSave} className="btn btn-outline-light" type="button">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
