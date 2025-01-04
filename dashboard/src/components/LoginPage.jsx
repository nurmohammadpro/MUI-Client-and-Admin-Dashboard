import { FcInfo } from "react-icons/fc";
import illustrationDashboard from "../assets/illustration-dashboard.webp";
import jsIcon from "../assets/js_icon.png";
import nextJsIcon from "../assets/nextjs_icon.png";
import reactIcon from "../assets/react_icon.png";
import tailwindIcon from "../assets/tailwindcss_icon.png";
import Icons from "./Icons";
import SpanLinks from "./SpanLinks";

export default function LoginPage() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute left-0 w-full md:w-[500px] h-full flex flex-col items-center justify-center bg-login">
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
      <div className="flex-1 flex items-center justify-center ml-[500px] bg-white">
        <div className="w-full max-h-[420px] max-w-[420px]">
          <h3 className="text-xl font-bold text-start mb-2">
            Sign in to your account
          </h3>
          <p className="text-sm text-txtsec mb-6">
            Don't have an account?{" "}
            <SpanLinks text="Get Started" path="/register" />
          </p>
          <div className="flex gap-2 items-center justify-center w-full bg-blue-100 px-4 py-3 rounded-md">
            <FcInfo />

            <p>
              Use <SpanLinks text="demo@minimals.cc" path="#" /> with password
              <SpanLinks text="@2Minimal" path="#" />
            </p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
