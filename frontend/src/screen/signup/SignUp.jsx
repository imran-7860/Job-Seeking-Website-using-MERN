import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [register, setRegister] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (!register || !name || !email || !phone || !password) {
        alert("Please fill all information");
        return;
      }
      // let urlEndPoint = "createUser";
      // let urlEndPoint = '';

      // if (register === "employer") {
      //   urlEndPoint = "createEmployer";
      // }else{
      //   urlEndPoint = "createUser"
      // }
      const response = await axios.post(`http://localhost:8000/createUser`, {
        register,
        name,
        email,
        phone,
        password,
      });
      console.log(response);
      // console.log(name , email , password , phone )

      if (response.data.status) {
        setRegister("");
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        alert("User successfully created account");
        navigate("/signin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container mx-auto px-1 lg:px-2  lg:h-screen lg:py-5 py-2 md:py-3">
        <div className=" grid md:grid-cols-2 ">
          <div className="">
            <h1 className="font-bold text-3xl mb-2  ">JOB_PORTAL</h1>
            <h3 className="font-bold text-xl mb-5 ">Login to your account</h3>
            <form className="flex flex-col max-w-md  ">
              <label for="cars" className=" font-semibold">
                Login Us
              </label>

              <select
                value={register}
                onChange={(e) => setRegister(e.target.value)}
                name="cars"
                id="cars"
                className="p-2  outline-none border border-blue-400  mt-2 mb-2 rounded-md  "
              >
                <option>Select Role</option>
                <option value="job seeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
              <label className=" font-semibold">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder="Enter name"
                className="p-2  outline-none border border-blue-400 mt-2 mb-2 rounded-md "
              />

              <label className=" font-semibold">Email Address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
                className="p-2  outline-none border border-blue-400 mt-2 mb-2 rounded-md "
              />
              <label className=" font-semibold">Phone Number</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                className="p-2  outline-none border border-blue-400 mt-2 mb-2 rounded-md "
              />

              <label className=" font-semibold">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter email"
                className="p-2  outline-none border border-blue-400 mt-2 mb-2 rounded-md "
              />
              <button
                onClick={handleSignup}
                className=" bg-blue-950 text-white  rounded-xl p-3 text-center mt-3 mb-3"
              >
                Register
              </button>
              <Link
                to={"/signin"}
                className="border border-blue-950  text-blue-950  rounded-xl p-3 text-center "
              >
                Login Now
              </Link>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://knowledgemission.kerala.gov.in/img/official-login.jpg"
              alt=""
              className="lg:w-[500px] w-full   "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
