import { cn } from "@/lib/utils";
import Image from "next/image";

const Tooltip = ({
  title,
  image,
  bgColor,
}: {
  title: string;
  image: string;
  bgColor: string;
}) => {
  return (
    <div
      className={cn(
        "link relative bg-[#202C33] w-10 h-10 transfrom cursor-pointer grid place-items-center",
        "border border-border rounded-xl",
        "hover:scale-110 transition-all duration-200"
      )}
      style={{ background: bgColor ? bgColor : "#2D2C33" }}
    >
      <div className="w-[27px] h-[27px]">
        <Image
          src={image}
          alt={title}
          className="w-full h-full overflow-clip object-contain"
        />
      </div>
    </div>
  );
};

export default Tooltip;
