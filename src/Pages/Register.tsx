import { LockClosedIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Textfield from "../component/Textfield";
import { register } from "../services/auth";
import success from "../util/registerSuccess";
import errorAuth from "../util/authError";
const Register = () => {
  const [uid, setUid] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
useEffect(() => {
  console.log(uid)
})

  const navigate = useNavigate();

  const handleOnUidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUid(e.target.value);
  };

  const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleOnTelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTel(e.target.value);
  };

  const handleOnPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleOnClick = async () => {
    if (uid  || name || password || email || tel ) {
      const { status, data, msg } = await register({
          user_id: uid,
          name: name,
          password: password,
          email: email,
          tel: tel,
        });
        success();
        navigate("/Login");
      };
      errorAuth()
    } 
    

  const loginClick = async () =>{
    navigate("/Login")
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Register
          </h2>
        </div>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <Textfield
              onChange={handleOnUidChange}
              value={uid}
              label={"Username"}
              id={"username"}
              name={"username"}
              type={"text"}
            />
          </div>
          <div>
            <Textfield
              onChange={handleOnNameChange}
              value={name}
              label={"Name"}
              id={"name"}
              name={"name"}
              type={"text"}
            />
          </div>
          <div>
            <Textfield
              onChange={handleOnPasswordChange}
              value={password}
              label={"Password"}
              id={"password"}
              name={"password"}
              type={"password"}
            />
          </div>
          <div>
            <Textfield
              onChange={handleOnEmailChange}
              value={email}
              label={"Email"}
              id={"email"}
              name={"email"}
              type={"email"}
            />
          </div>
          <div>
            <Textfield
              onChange={handleOnTelChange}
              value={tel}
              label={"Tel"}
              id={"tel"}
              name={"tel"}
              type={"text"}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            onClick={handleOnClick}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
          <button className="mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-gray-200 py-2 px-4 text-sm font-medium text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type="submit" onClick={loginClick}>
           
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
