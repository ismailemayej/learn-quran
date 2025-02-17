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
