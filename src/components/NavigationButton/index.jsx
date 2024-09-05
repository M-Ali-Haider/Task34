export default function NavigationButton({ direction, ability }) {
  const handleStyle = () => {
    if (direction === "prev") {
      return "left-2";
    } else {
      return "right-2";
    }
  };

  const icons = () => {
    if (direction === "prev") {
      return <PrevSVG />;
    } else {
      return <NextSVG />;
    }
  };

  return (
    <>
      <button
        onClick={ability}
        className={`rounded-sm absolute ${handleStyle()} w-8 h-8 flex items-center justify-center font-bold text-white bg-gray-500 hover:bg-[#8b5cf6] transition-all duration-500`}
      >
        {icons()}
      </button>
    </>
  );
}

function PrevSVG({}) {
  return (
    <svg
      className="h-6 w-6 text-lg"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
}

function NextSVG({}) {
  return (
    <svg
      className="h-6 w-6 text-lg"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
