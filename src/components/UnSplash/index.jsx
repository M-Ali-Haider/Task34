"use client";
import ImagesContainer from "@/components/ImagesContainer";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
export default function UnsplashAPI() {
  const [query, setQuery] = useState("cat");
  const [data, setData] = useState(null);

  const fetchImages = async (query) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=${query}`
    );
    const data = await res.json();
    return data;
  };
  const { mutate, isLoading, error } = useMutation(fetchImages, {
    onSuccess: (data) => {
      setData(data);
    },
  });
  const handleSearch = () => {
    mutate(query);
  };

  useEffect(() => {
    mutate(query);
  }, []);

  const handleInfo = () => {
    if (isLoading) {
      return <span>its Loading....</span>;
    } else if (data) {
      if (data.results.length > 0) {
        return <ImagesContainer data={data} />;
      } else {
        return <span>No Images Found</span>;
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <h1 className="flex items-center justify-center text-[#645cff] text-4xl md:text-5xl my-12">
        Unsplash Images
      </h1>
      {/* Searchbar Div */}
      <div className="flex items-center justify-center w-full max-w-[850px] h-[36px]">
        <input
          id="search"
          type="text"
          placeholder="cat"
          className="h-full flex-[1] border border-black border-solid pl-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="font-bold bg-[#645cff] text-white text-xs p-2 px-4 h-full"
        >
          Search
        </button>
      </div>
      {handleInfo()}
    </>
  );
}
