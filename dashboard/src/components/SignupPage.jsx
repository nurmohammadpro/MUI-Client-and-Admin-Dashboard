import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import InputField from "./InputField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SpanLinks from "./SpanLinks";
import { saveUser } from "./users";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmission = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    saveUser(newUser);
    navigate("/signin");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Navbar />
      <Sidebar />
      <div className="flex-1 flex items-center justify-center md:ml-[500px] bg-white">
        <div className="w-full max-h-[420px] max-w-[420px]">
          <h3 className="text-xl font-bold text-start mb-2">
            Get started absolutely free
          </h3>
          <p className="text-sm text-txtsec mb-8">
            Already have an account? <SpanLinks text="Sign In" path="/signin" />
          </p>
          {/* <div className="flex gap-2 items-center justify-center w-full bg-blue-100 px-4 py-3 mb-8 rounded-md">
            <FcInfo />

            <p>
              Use <SpanLinks text="demo@minimals.cc" path="#" /> with password
              <SpanLinks text="@2Minimal" path="#" />
            </p>
          </div> */}
          <form className="mb-4" onSubmit={handleSubmission}>
            <div className="flex w-full gap-3">
              <InputField
                label="First Name"
                placeholder=""
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <InputField
                label="Last Name"
                placeholder=""
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <InputField
              label="Email"
              placeholder=""
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              label="Password"
              placeholder="6+ characters"
              type="password"
              id="password"
              htmlFor=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" title="Sign Up" variant="btnPrimary" />
          </form>
          <p className="text-[14px] w-full text-center text-gray-500">
            by signing up, I agree to{" "}
            <span className="font-bold hover:underline">Terms of service</span>
            {"  "}
            and
            <span className="font-bold hover:underline"> Privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
