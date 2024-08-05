import Link from "next/link";
import { PropsWithChildren } from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Props = PropsWithChildren & {};
const TimeLine = ({ children }: Props) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

interface ItemProps {
  date: string;
  title: string;
  subtitle: string;
  link?: string;
  tag: string;
  isCourse?: boolean;
}

export const Item = ({
  date,
  title,
  subtitle,
  link,
  tag,
  isCourse,
}: ItemProps) => {
  return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
      <div
        className="h-auto flex-none break-words whitespace-pre"
        style={{ width: isCourse ? 0 : "" }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>
      <div
        className="flex gap-x-2"
        style={{ transform: isCourse ? "translateX(-45px)" : "" }}
      >
        <div className="flex flex-col gap-0.5">
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          <div className="flex items-center gap-2 w-win ">
            {link ? (
              <Link href={link} target="_blank">
                <Body link={link} subTitle={subtitle} tag={tag} />
              </Link>
            ) : (
              <Body subTitle={subtitle} tag={tag} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Body = ({
  link,
  subTitle,
  tag,
}: {
  link?: string;
  subTitle: string;
  tag: string;
}) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] text-white bg-[#2D2C33] px-2 text-[10px]">
          {tag}
        </div>
      ) : null}
    </div>
  );
};
export default TimeLine;
