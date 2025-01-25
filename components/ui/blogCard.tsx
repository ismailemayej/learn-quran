import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ButtonA from "../button";

export const BlogCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BlogGridItem = ({
  className,
  title,
  description,
  image,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "group-hover/bento:translate-x-2  relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] border-black bg-white border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="">
        {/* Ensure a valid `src` is provided */}
        {image ? (
          <Image
            alt={title ? `Image for ${title}` : "Card image"}
            className="rounded-xl w-full h-44 object-cover"
            src={image}
            width={400}
            height={176}
          />
        ) : (
          <div className="rounded-xl w-full h-44 bg-gray-200 flex items-center justify-center">
            <span className="text-neutral-500 text-sm">No Image Available</span>
          </div>
        )}

        <div className="font-sans font-bold line-clamp-2 text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title || "Untitled"}
        </div>
        {/* <div className="font-sans font-normal line-clamp-2 text-neutral-600 text-xs dark:text-neutral-300">
          {description || "No description available."}
        </div> */}
        <ButtonA
          link={`/blog/${link}`}
          className="mt-6 absolute bottom-0 hover:translate-x-1 lg:mt-2"
        >
          Details
        </ButtonA>
      </div>
    </div>
  );
};
