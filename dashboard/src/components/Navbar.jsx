import Logo from "../assets/logo.png";
import settingsIcon from "../assets/settings.png";
import Icons from "./Icons";

export default function Navbar() {
  return (
    <div className="absolute w-full px-8 py-8 top-0 flex items-center justify-between z-10 cursor-pointer">
      <Icons src={Logo} alt="Logo" width={24} height={24} />
      <div className="flex gap-4">
        <p className="font-bold text-md hover:underline">Need help?</p>
        <img
          src={settingsIcon}
          alt="Settings Icon"
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
}
