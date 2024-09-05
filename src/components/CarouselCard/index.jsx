import Image from "next/image";

export default function CarouselCard({ person }) {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center min-w-full min-h-full px-4`}
      >
        <div className="mb-4 w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-solid border-[#ddd6fe] shadow-2xl">
          <Image
            src={person.path}
            width={150}
            height={150}
            alt="person image"
            className="w-[150px] h-[150px] object-cover object-center"
          />
        </div>
        <h1 className="text-purple-500 font-light uppercase text-xl tracking-wide">
          {person.name}
        </h1>
        <p className="my-1 font-light">{person.designation}</p>
        <p className="w-full text-center text-gray-500 leading-loose mt-8">
          {person.description}
        </p>
        <div className="mt-4">
          <QuotationSVG />
        </div>
      </div>
    </>
  );
}

function QuotationSVG({}) {
  return (
    <svg
      className="w-12 h-12 fill-[#8b5cf6]"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
    </svg>
  );
}
