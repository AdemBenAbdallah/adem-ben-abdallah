import React from "react";

type Props = {
  icon?: React.ReactNode;
  placeholder: string;
  type: "email" | "text" | "password";
  name: string;
};

const Input = ({ icon, placeholder, type, name }: Props) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className="bg-[#14064d] text-primary-foreground w-full rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-none"
      />
    </div>
  );
};

export default Input;
