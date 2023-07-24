import React, { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        type="number"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-white border-2 rounded-lg w-full text-gray-700 mr-3 py-3 px-4 outline-none focus:border-blue-200 transition-colors duration-200 ${className}`}
      />
    </div>
  );
};

export default Input;
