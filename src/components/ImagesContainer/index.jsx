import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

export default function ImagesContainer({ data }) {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["uniqueKey", query],
  //   queryFn: () =>
  //     fetch(
  //       `https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=${query}&limit=30`
  //     ).then((res) => res.json()),
  // });

  // if (isLoading || !data) return <p>Loading....</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {/* Images Container */}
      <div className="flex flex-wrap mt-12 items-center justify-center gap-8 max-w-[1080px]">
        {data.results.map((item, index) => {
          return (
            <Image
              key={index}
              src={`${item.urls.full}`}
              width={325}
              height={160}
              className="bg-blue-500 w-[325px] h-[160px] object-cover object-center"
              alt="unsplash image"
            />
          );
        })}
      </div>
    </>
  );
}
