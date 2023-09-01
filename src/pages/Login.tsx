import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";

function Login() {
  const studentIDRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [borderStudentID, setBorderStudentID] = useState("");
  const [errorStudentID, setErrorStudentID] = useState("");
  const [borderEmail, setBorderEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentID = studentIDRef.current?.value;
    const email = emailRef.current?.value;
    setErrorStudentID("Invalid studentID");
    setErrorEmail("Invalid email");
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="justify-align-center-layout">
      <Card>
        <h1 className="text-[42px] font-bold text-black-100 text-center">
          Welcome back
        </h1>
        <p className="text-center">IOTCheckAttendance</p>
        <form
          action="post"
          className="mt-[2.4rem] relative"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="input-layout">
            <label className="input-label">StudentID</label>
            <label
              htmlFor="studentID"
              className={`input-border ${borderStudentID} ${
                errorStudentID ? "border-red-500" : ""
              }`}
            >
              <input
                id="studentID"
                name="studentID"
                type="text"
                placeholder="StudentID"
                className="input-field"
                ref={studentIDRef}
                onFocus={() => {
                  setBorderStudentID("border-black-800");
                  if (errorStudentID) setErrorStudentID("");
                }}
                onBlur={() => {
                  setBorderStudentID("");
                }}
                required
                autoComplete="off"
              />
            </label>
            <p className="text-error">{errorStudentID}</p>
          </div>
          <div className="input-layout mt-[1rem]">
            <label className="input-label">Email</label>
            <label
              htmlFor="email"
              className={`input-border ${borderEmail} ${
                errorEmail ? "border-red-500" : ""
              }`}
            >
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Email @fpt.edu.vn"
                className="input-field"
                ref={emailRef}
                onFocus={() => {
                  setBorderEmail("border-black-800");
                  if (errorEmail) setErrorEmail("");
                }}
                onBlur={() => {
                  setBorderEmail("");
                }}
                required
                autoComplete="off"
              />
            </label>
            <p className="text-error">{errorEmail}</p>
          </div>
          <button
            className=" mt-6 bg-purple-600 text-white btn-submit text-[17px]"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center my-[2rem]">
          <div className="h-[1px] bg-gray-100 w-full"></div>
          <div className="absolute bg-white px-[0.6rem]">
            <p className="text-gray-400 text-sm">or</p>
          </div>
        </div>
        <button
          className="btn-submit border-[0.1rem] text-[16px]
        flex flex-row justify-center items-center font-medium
        text-gray-700 border-gray-300"
        >
          <IconContext.Provider
            value={{ size: "22", className: "mr-2 mb-[2px]" }}
          >
            <FcGoogle />
          </IconContext.Provider>
          Continue with Google
        </button>
      </Card>
    </div>
  );
}

export default Login;
