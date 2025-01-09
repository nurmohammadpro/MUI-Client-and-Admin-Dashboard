import { useState } from "react";
import { RxEyeOpen } from "react-icons/rx";
import { TbEyeClosed } from "react-icons/tb";

export default function InputField({
  label,
  placeholder,
  type,
  id,
  htmlFor,
  value,
  onChange,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative mb-6">
      <label htmlFor={htmlFor || id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={type === "password" ? (showPass ? "text" : "password") : type}
          id={id}
          placeholder={placeholder}
          className="border border-gray-200 rounded-md px-3 py-3 w-full hover:border-gray-400 focus:border-gray-600"
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <span
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <RxEyeOpen /> : <TbEyeClosed />}
          </span>
        )}
      </div>
    </div>
  );
}
