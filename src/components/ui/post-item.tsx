import { formatDate } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { slug } from "github-slugger";
import { Calendar } from "lucide-react";
import Link from "next/link";
import AboutCard from "./aboutCard";
import { FancyButton } from "./button";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md",
      })}
      href={`/tags/${slug(tag)}`}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <AboutCard>
      <article className="flex flex-col gap-2 border-border border-b py-3">
        <div>
          <h2 className="text-2xl font-bold">
            <Link href={"/" + slug}>{title}</Link>
          </h2>
        </div>
        <div className="flex gap-2">
          {tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <div className="max-w-none text-muted-foreground">{description}</div>
        <div className="flex justify-between items-center">
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
          <Link href={"/" + slug}>
            <FancyButton> Read more</FancyButton>
          </Link>
        </div>
      </article>
    </AboutCard>
  );
}

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
