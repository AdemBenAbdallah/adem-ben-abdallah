const ContactCard = ({
  title,
  icon,
  text,
  btnText,
}: {
  title: string;
  icon: JSX.Element;
  text: string;
  btnText: string;
}) => {
  return (
    <div className="bg-primary-background border border-border rounded-lg relative overflow-hidden pt-5 pl-[25px] shadow-md pb-3">
      <div className="z-20 flex flex-col gap-6 justify-between items-start">
        <div className="flex items-center gap-x-2">
          <span className="bg-[#bebcc9] w-8 h-8 rounded-lg grid place-items-center">
            {icon}
          </span>
          <h1>{title}</h1>
        </div>
        <div className="p-4">
          <h2 className="font-bold text-sm md:text-xl">{text}</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
