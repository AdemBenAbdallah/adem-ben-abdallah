import React from "react";

type Props = {
  type: "checkbox" | "radio";
  id: string;
  text: string;
  selectOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  allowMultiple: boolean;
};
const SelectInput = ({
  type,
  id,
  text,
  selectOptions,
  setSelectedOptions,
  allowMultiple,
}: Props) => {
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectOptions.includes(text)}
        onChange={(e) => {
          if (allowMultiple) {
            if (e.target.checked) {
              setSelectedOptions([...selectOptions, text]);
            } else {
              setSelectedOptions(
                selectOptions.filter((option) => option !== text)
              );
            }
          } else {
            setSelectedOptions([text]);
          }
        }}
        className="w-[15px] h-[15px] !rounded-xl !bg-transparent"
      />
      <label htmlFor={id} className="cursor-pointer">
        {text}
      </label>
    </div>
  );
};

export default SelectInput;
