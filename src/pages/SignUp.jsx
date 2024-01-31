import React from "react";

export default function SignUp() {
    const onSave = () => {
        console.log("Save button clicked");
    }

    const onType = (e) => {
        console.log(e.target.value);
    }

  return (
    <div className="signup">
      <div className="container col-lg-6 mt-3">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Signup Form</h2>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input onKeyUp={onType} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="example@gmail.com"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1" placeholder="Password must be atleast of 8 characters"
            />
          </div>
          <button onClick={onSave} className="btn btn-outline-light" type="button">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
