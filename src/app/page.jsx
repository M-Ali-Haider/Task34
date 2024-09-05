import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl">This is the Homepage</h1>
          <h2 className="text-2xl my-4">
            This site has <strong>Two</strong> tasks
          </h2>
          <div className="flex items-center gap-4">
            <Link className="font-bold underline" href={`/carousel`}>
              Carousel
            </Link>
            <Link className="font-bold underline" href={`/taskapi`}>
              Unsplash API
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
