import React, { useRef, useState } from "react";

function Form() {
    const [register , setRegister] = useState(true)
    const emailRef =  useRef()
    const passwordRef =  useRef()


    const registeremail =useRef() 
    const registerpassword = useRef()
    const usernameRef =  useRef()

    const formHandle = (e) => {
        e.preventDefault()

        if(!emailRef || !passwordRef) {
            alert("Please fill out all fields")
            return  false;
        }
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        emailRef.current.value = ""
        passwordRef.current.value = ""
        alert("Form submission successfully")
     }
     const registerHandle = (e) => {
       e.preventDefault();

       if (!emailRef || !passwordRef || !usernameRef) {
         alert("Please fill out all fields");
         return false;
       }
       console.log(registeremail.current.value);
       console.log(registerpassword.current.value);
       console.log(usernameRef.current.value);
       registeremail.current.value = "";
       registerpassword.current.value = "";
       usernameRef.current.value = "";
       setRegister(false);
       alert("Form submission successfully");
     };
  return (
    <>
      {register && (
        <form
          className=" flex flex-col gap-5 "
          onSubmit={(e) => registerHandle(e)}
        >
          <h1 className="text-3xl">Register</h1>
          <input
            className="mb-5 text-1xl p-1 w-[300px]"
            type="email"
            placeholder="Email"
            ref={registeremail}
          ></input>
          <input
            className="mb-5 text-1xl p-1 w-[300px]"
            type="username"
            placeholder="Username"
            ref={usernameRef}
          ></input>
          <input
            className="text-1xl p-1 w-[300px]"
            type="passwoed"
            placeholder="password"
            ref={registerpassword}
          ></input>

          <button
            type="submit"
            className="text-white bg-blue-500 p-2 rounded-md"
          >
            Submit
          </button>
          <div>
            <h2>Have an account?</h2>
            <button
              onClick={() => setRegister(false)}
              className="text-white bg-blue-500 p-2 rounded-md "
            >
              Login
            </button>
          </div>
        </form>
      )}
      {/* // ---------------------------------------------------------------- */}
      {!register && (
        <form onSubmit={(e) => formHandle(e)}>
          <div className=" flex flex-col gap-5 ">
            <h1 className="text-3xl">Login</h1>
            <input
              className="mb-5 text-1xl p-1 w-[300px]"
              type="email"
              placeholder="Email"
              ref={emailRef}
            ></input>
            <input
              className="text-1xl p-1 w-[300px]"
              type="passwoed"
              placeholder="password"
              ref={passwordRef}
            ></input>

            <button
              type="submit"
              className="text-white bg-blue-500 p-2 rounded-md"
            >
              Login
            </button>

            <button
              onClick={() => setRegister(true)}
              className="text-white bg-blue-500 p-2 rounded-md"
            >
              Cerate Account
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default Form;
