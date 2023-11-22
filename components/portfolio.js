import Image from "next/legacy/image";

const Portfolio = () => {
  return (
    <div className="mx-auto max-w-[1240px] py-16 text-center">
      <h1 className="p-4 text-3xl font-bold">Travel Photos</h1>
      <div className="grid grid-rows-none gap-4 p-4 md:grid-cols-5">
        <div className="col-span-2 row-span-2 h-full w-full md:col-span-3">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
            width="677"
            height="451"
            alt="image"
            layout="responsive"
            className="rounded-md"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
        <div className="h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2048&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
