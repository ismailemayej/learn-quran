import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import NextLink from "next/link";
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
        <NextLink href={`/blog/${link}`}>
          <button className="absolute bottom-1 text-base md:text-lg px-4 md:px-6 bg-gradient-to-r from-teal-400 to-blue-400 dark:from-teal-500 dark:to-blue-600 hover:from-teal-500 hover:to-blue-500 dark:hover:from-teal-600 dark:hover:to-blue-700 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 rounded-br-3xl rounded-tl-3xl">
            Details
          </button>
        </NextLink>
      </div>
    </div>
  );
};
