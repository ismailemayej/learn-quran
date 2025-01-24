import Image from "next/image";
const BlogDateils = async ({ params }: any) => {
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
    <div className="lg:pt-20 pt-2 lg:pb-20 z-20">
      <div className="text-white border rounded-xl p-3  lg:px-8 mx-auto">
        <div className="mt-4 lg:text-3xl text-2xl pb-2  items-start font-bold">
          {data.title}
        </div>
        <Image
          className="rounded-xl"
          src={data.image}
          width={750}
          height={550}
          alt={data.title}
        />
        <span className=" bg-yellow-300 text-black px-2 py-1 text-xs mt-6 rounded-lg">
          {data.category}
        </span>

        <div className="mt-4">{cleanDetails}</div>
      </div>
    </div>
  );
};

export default BlogDateils;
