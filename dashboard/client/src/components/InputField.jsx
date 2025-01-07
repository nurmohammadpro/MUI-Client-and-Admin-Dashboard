import { useState } from "react";
import { RxEyeOpen } from "react-icons/rx";
import { TbEyeClosed } from "react-icons/tb";

export default function InputField({
  label,
  placeholder,
  type,
  value,
  id,
  htmlFor,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative mb-6">
      <input
        type={type === "password" ? (showPass ? "text" : "password") : type}
        id={id}
        placeholder={placeholder}
        className="border border-gray-200 rounded-md px-3 py-4 w-full hover:border-gray-400 focus:border-gray-600"
        value={value}
      />
      <label
        htmlFor={htmlFor || id}
        className="absolute -top-2 left-3 bg-white px-2 text-xs font-bold text-gray-500"
      >
        {label}
      </label>

      {type === "password" && (
        <span
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <RxEyeOpen /> : <TbEyeClosed />}
        </span>
      )}
    </div>
  );
}
