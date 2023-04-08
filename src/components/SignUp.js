import React, { useState } from "react";
import register from "../assets/register.gif";
import { useRef } from "react";

function SignUp() {

  const [category, setMentor] = useState("");

  const handleMentorChange = (e) => {
    setMentor(e.target.value);
  };

  //Database e account create howar code
  const nameRef=useRef()
  const userRef=useRef()
  const passRef=useRef()
  const conPassRef=useRef()
  const catRef=useRef()
  const mentorRef=useRef()

  const handleSignup=(e)=>{
    const name=nameRef.current.value
    const user=userRef.current.value
    const pass=passRef.current.value
    const conPass=conPassRef.current.value
    const cat=catRef.current.value
    const mentor=mentorRef.current.value
    const newService={name,user,pass,conPass,cat,mentor}
    e.preventDefault()
    fetch("http://localhost:5000/signup",{method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify(newService),})
    .then(res=>res.json())
    .then((data) => {
      console.log(data)
      if(data.statusCode===200) {
        alert('Succesfully Added!')
        e.target.reset();
      }
    })
  }
  //Database e account create howar code

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block dark:bg-gray-800 p-10">
        <img className="w-full h-full object-cover pt-10" src={register} alt="" />
      </div>
      <div className="bg-white dark:bg-gray-800 flex flex-col justify-center pr-10 pt-20 pb-10">
        <form onSubmit={handleSignup} className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-300 dark:bg-gray-900 p-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN UP
          </h2>
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>Full name</label>
            <input
              type="text" ref={nameRef}
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>Username</label>
            <input ref={userRef}
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
            />
          </div>
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>Password</label>
            <input ref={passRef}
              className="p-2 rounded-lg dark:bg-gray-700 mt-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="password"
              
            />
          </div>
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>Confirm Password</label>
            <input ref={conPassRef}
              className="p-2 rounded-lg dark:bg-gray-700 mt-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="password"
              
            />
          </div>
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>Category</label>
            <select
              ref={catRef}
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="text" value={category} onChange={handleMentorChange}
            >
              <option>Please select...</option>
              <option value="fjs">Full StackJS</option>
              <option value="sp">Spring Boot</option>
              <option value="fl">Flutter</option>
              <option value="dot">Dotnet</option>
            </select>
          </div>
          <div className="flex flex-col dark:text-gray-400 py-2">
            <label>Mentor</label>
            <select ref={mentorRef}
              className="rounded-lg dark:bg-gray-700 mt-2 p-2 focus:border-blue-500 dark:focus:bg-gray-800 focus:outline-none"
              type="text"
            >
              {category === "fjs" && (
                <>
                  <option value="fjs">Md. Al Asad Nur Riyad</option>
                  <option value="sp">Md Kalim Amzad Chy</option>
                  <option value="fl">Md. Monjurul Hoque Chowdhury</option>
                  <option value="dot">Md Shahariar Younus Ashik</option>
                  <option value="dot">Mohammad Arfizur Rahman</option>
                </>
              )}

              {category === "sp" && (
                <>
                  <option value="dot">Iqbal Hossain</option>
                  <option value="dot">Md. Arif Haider</option>
                  <option value="dot">Arafat Hossain</option>
                  <option value="dot">Naimul Haque</option>
                  <option value="dot">Shabaj Khan</option>
                </>
              )}
              {category === "Please select..." && (
                <>
                  <option>Choose category first...</option>
                </>
              )}
            </select>
          </div>
          <button variant="primary" type="submit" className="w-full my-5 py-2 bg-blue-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
