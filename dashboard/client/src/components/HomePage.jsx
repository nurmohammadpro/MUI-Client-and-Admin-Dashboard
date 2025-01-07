import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function HomePage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Navbar />
      <Sidebar />

      <div className="flex gap-4 w-[420px] md:ml-[500px]">
        <Button
          title="Sign In"
          type="submit"
          variant="btnPrimary"
          onClick={handleSignIn}
        />
        <Button
          title="Sign Up"
          type="submit"
          variant="btnSec"
          onClick={handleSignUp}
        />
      </div>
    </div>
  );
}
