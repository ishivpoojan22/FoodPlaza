/** @format */

const Shimmer = () => {
  const shimmerCount = 10;
  return (
    <div className="flex flex-wrap items-stretch justify-center">
      {Array.from({ length: shimmerCount }).map((_, idx) => (
        <div
          key={idx}
          className="m-4 h-[340px] w-[250px] animate-pulse rounded-lg bg-gray-200 p-4"
        />
      ))}
    </div>
  );
};

export default Shimmer;
