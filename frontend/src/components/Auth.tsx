import { ChangeEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { z } from "zod";
import { BACKEND_URL } from "../config";

const signupInput = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

type SignupInput = z.infer<typeof signupInput>;

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      localStorage.setItem("token", response.data.jwt);
      navigate("/blogs");
      alert(type === "signup" ? "Sign up successful" : "Sign in Successful");
    } catch (e) {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-center text-3xl font-bold">
            {type === "signup" ? "Create an Account" : "Sign in to Your Account"}
          </div>
          <div className="text-slate-600 text-center mt-2">
            {type === "signup" ? "Already have an account ? " : "Don't have an account ? "}
            <Link to={type === "signup" ? "/signin" : "/signup"}>
              <u>{type === "signup" ? "Login" : "Signup"}</u>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          {type === "signup" ? (
            <LabelInput
              Label="Name"
              placeholder="Enter your name"
              onChange={(e: any) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : null}
          <LabelInput
            Label="Email"
            placeholder="Enter your email"
            onChange={(e: any) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <LabelInput
            Label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e: any) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            onClick={sendRequest}
            type="button"
            className="mt-8 w-full text-white bg-white border border-black-300 focus:outline-none hover:bg-slate-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            {type === "signin" ? "Sign in" : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelInputType {
  Label: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
}

function LabelInput({ Label, placeholder, onChange, type }: LabelInputType) {
  return (
    <div>
      <div className="mt-8">
        <label className="block mb-1 text-sm font-semibold text-black">{Label}</label>
        <input
          onChange={onChange}
          type={type || "text"}
          className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}