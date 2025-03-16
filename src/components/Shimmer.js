const Shimmer = () => {
  return (
    <div className="restaurant-list flex gap-4 flex-wrap p-4 justify-around">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card w-52 h-52 bg-gray-100 m-6"></div>
        ))}
    </div>
  );
};

export default Shimmer;
