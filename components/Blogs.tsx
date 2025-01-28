import React from "react";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import TitleText from "./TitleText";
import { BlogCard, BlogGridItem } from "./ui/blogCard";

export async function Blogs() {
  const res = await fetch(
    "https://portfolio-server-six-tau.vercel.app/api/v1/blogs",
    {
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  return (
    <div>
      <TitleText text="ব্লগ" size="5xl" align="center" gradient />
      <BlogCard className="mt-2.5 mx-auto">
        {data.slice(0, 4).map((item: any) => (
          <BlogGridItem
            key={item._id}
            title={item.title}
            description={item.details}
            image={item.image}
            link={item._id}
            //   className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BlogCard>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
