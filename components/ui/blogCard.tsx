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
        "relative row-span-1 rounded-xl group hover:shadow-lg transition duration-200 shadow-md dark:shadow-none p-4 bg-white dark:bg-gray-900 dark:border-gray-700 border border-gray-300 justify-between flex flex-col space-y-4",
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
          <div className="rounded-xl w-full h-44 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <span className="text-neutral-500 dark:text-neutral-400 text-sm">
              No Image Available
            </span>
          </div>
        )}

        <div className="font-sans font-bold line-clamp-2 text-neutral-800 dark:text-neutral-200 mb-2 mt-2">
          {title || "Untitled"}
        </div>
        {/* Uncomment description if needed */}
        {/* <div className="font-sans font-normal line-clamp-2 text-neutral-600 dark:text-neutral-400 text-xs">
          {description || "No description available."}
        </div> */}
        <ButtonA
          link={`/blog/${link}`}
          className=" lg:absolute lg:bottom-[-6] mt-6 lg:mt-2 hover:translate-x-1 text-sm px-4 py-2 bg-blue-500 text-white dark:bg-blue-600 rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition"
        >
          Details
        </ButtonA>
      </div>
    </div>
  );
};
