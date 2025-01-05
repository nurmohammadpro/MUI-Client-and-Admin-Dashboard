import { FcInfo } from "react-icons/fc";
import illustrationDashboard from "../assets/illustration-dashboard.webp";
import jsIcon from "../assets/js_icon.png";
import nextJsIcon from "../assets/nextjs_icon.png";
import reactIcon from "../assets/react_icon.png";
import tailwindIcon from "../assets/tailwindcss_icon.png";
import Button from "./Button";
import Icons from "./Icons";
import InputField from "./InputField";
import Navbar from "./Navbar";
import SpanLinks from "./SpanLinks";

export default function LoginPage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Navbar />
      <div className="absolute left-0 w-full md:w-[500px] h-full hidden md:flex flex-col items-center justify-center bg-login">
        <h2 className="text-3xl font-bold font-primary mb-4">
          Hi, Welcome back
        </h2>
        <p className="text-lg mb-8 text-txtsec font-normal font-secondary">
          More effectively with optimized workflows.
        </p>
        <img src={illustrationDashboard} alt="Illustration Dashboard Image" />
        <div className="flex items-center justify-center gap-8 text-sm mt-8">
          <Icons src={jsIcon} alt="JS Icon" width={30} height={35} />
          <Icons src={reactIcon} alt="React Icon" width={35} height={35} />
          <Icons src={nextJsIcon} alt="Next JS Icon" width={35} height={35} />
          <Icons
            src={tailwindIcon}
            alt="TailwindCSS Icon"
            width={55}
            height={35}
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center md:ml-[500px] bg-white">
        <div className="w-full max-h-[420px] max-w-[420px]">
          <h3 className="text-xl font-bold text-start mb-2">
            Sign in to your account
          </h3>
          <p className="text-sm text-txtsec mb-8">
            Don't have an account?{" "}
            <SpanLinks text="Get Started" path="/register" />
          </p>
          <div className="flex gap-2 items-center justify-center w-full bg-blue-100 px-4 py-3 mb-8 rounded-md">
            <FcInfo />

            <p>
              Use <SpanLinks text="demo@minimals.cc" path="#" /> with password
              <SpanLinks text="@2Minimal" path="#" />
            </p>
          </div>
          <form>
            <InputField label="Email" placeholder="" type="email" id="email" />

            <p className="mb-4 text-end font-primary text-gray-800 hover:underline cursor-pointer">
              Forgot Password?
            </p>

            <InputField
              label="Password"
              placeholder=""
              type="password"
              id="password"
              htmlFor=""
            />

            <Button type="submit" title="Sign In" variant="btnPrimary" />
          </form>
        </div>
      </div>
    </div>
  );
}
