import Image from "next/image";
import React from "react";
import NextLink from "next/link";
export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch(
    "https://portfolio-server-six-tau.vercel.app/api/v1/blogs",
    {
      cache: "no-store",
    }
  );
  const { data } = await res.json();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-12 p-4 lg:p-8">
      {/* Left section: Post details */}
      <div className="lg:col-span-2  text-white rounded-xl p-6 shadow-lg">
        {children}
      </div>
      {/* Right section: All posts */}
      <div className=" lg:mt-[-30px] light:bg-slate-100  lg:col-span-1 text-white rounded-xl p-4 shadow-lg">
        <div className="lg:fixed">
          <h1 className="text-2xl lg:text-4xl font-bold leading-snug  text-yellow-900 dark:text-white">
            All Posts
          </h1>
          <div className="mt-4 space-y-4">
            {data.slice(0, 4).map((item: any) => (
              <div
                key={item._id}
                className="dark:bg-gray-700 bg-white light:border dark:text-white  text-black shadow-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-900 transition"
              >
                <NextLink href={`/blog/${item._id}`}>
                  <div className="flex justify-start gap-2">
                    <Image
                      className="object-cover rounded-lg"
                      src={item.image}
                      height={40}
                      width={60}
                      alt="post image"
                    />
                    <h2 className="text-lg font-medium">{item.title}</h2>
                  </div>
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
