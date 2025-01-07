import { useState } from "react";
import { signinUser } from "../../utilities/auth.js";

import { FcInfo } from "react-icons/fc";
import Button from "./Button";
import InputField from "./InputField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SpanLinks from "./SpanLinks";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubission = (e) => {
    e.preventDefault();
    signinUser(email, password);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Navbar />
      <Sidebar />
      <div className="flex-1 flex items-center justify-center md:ml-[500px] bg-white">
        <div className="w-full max-h-[420px] max-w-[420px]">
          <h3 className="text-xl font-bold text-start mb-2">
            Sign in to your account
          </h3>
          <p className="text-sm text-txtsec mb-8">
            Don't have an account?{" "}
            <SpanLinks text="Get Started" path="/signup" />
          </p>
          <div className="flex gap-2 items-center justify-center w-full bg-blue-100 px-4 py-3 mb-8 rounded-md">
            <FcInfo />

            <p>
              Use <SpanLinks text="demo@minimals.cc" path="#" /> with password
              <SpanLinks text="@2Minimal" path="#" />
            </p>
          </div>
          <form onSubmit={handleSubission}>
            <InputField
              label="Email"
              placeholder=""
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="mb-4 text-end font-primary text-gray-800 hover:underline cursor-pointer">
              Forgot Password?
            </p>

            <InputField
              label="Password"
              placeholder=""
              type="password"
              id="password"
              value={password}
              htmlFor=""
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" title="Sign In" variant="btnPrimary" />
          </form>
        </div>
      </div>
    </div>
  );
}
