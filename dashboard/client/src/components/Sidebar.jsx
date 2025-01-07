import illustrationDashboard from "../assets/illustration-dashboard.webp";
import jsIcon from "../assets/js_icon.png";
import nextJsIcon from "../assets/nextjs_icon.png";
import reactIcon from "../assets/react_icon.png";
import tailwindIcon from "../assets/tailwindcss_icon.png";
import Icons from "./Icons";

export default function Sidebar() {
  return (
    <div className="absolute left-0 w-full md:w-[500px] h-full hidden md:flex flex-col items-center justify-center bg-login">
      <h2 className="text-3xl font-bold font-primary mb-4">Hi, Welcome back</h2>
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
  );
}
