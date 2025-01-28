import Image from "next/image";

const BlogDetails = async ({ params }: any) => {
  const res = await fetch(
    `https://portfolio-server-six-tau.vercel.app/api/v1/blogs/${params.blogId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  const stripHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };
  const cleanDetails = stripHtmlTags(data.details);

  return (
    <div className=" pb-6 lg:px-3">
      <div className="max-w-5xl mx-auto  rounded-xl overflow-hidden">
        {/* Blog Header */}
        <div className="p-6 lg:p-10">
          <h1 className="text-2xl text-black dark:text-white lg:text-4xl font-bold">
            {data.title}
          </h1>
        </div>

        {/* Blog Image */}
        <div className="relative w-full h-64 lg:h-[450px]">
          <Image
            className="object-cover w-full h-full rounded-xl"
            src={data.image}
            fill
            alt={data.title}
          />
        </div>

        {/* Blog Content */}
        <div className="p-6 lg:p-10">
          <p className="text-base lg:text-lg leading-relaxed dark:text-white text-gray-900">
            {cleanDetails}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
