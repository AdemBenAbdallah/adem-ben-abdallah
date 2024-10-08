import React from "react";

type Props = {
  icon?: React.ReactNode;
  placeholder: string;
  name: string;
};

const Textarea = ({ icon, placeholder, name }: Props) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        {icon}
      </div>
      <textarea
        name={name}
        placeholder={placeholder}
        className="bg-[#14064d] text-primary-foreground w-full rounded-lg text-sm ps-10 p-2.5 pt-8 focus:outline-none"
      />
    </div>
  );
};

export default Textarea;
