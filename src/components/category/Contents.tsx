

import CategoryCard from "./CategoryCard";

const categoryData = [
  {
    id: 1,
    title: "Programming",
    image: "coding.png",
    path: "/categories/programming",
    bg: "bg-yellow-200",
  },
  {
    id: 2,
    title: "Sports",
    image: "trophy.png",
    path: "/categories/sports",
    bg: "bg-green-200",
  },
  {
    id: 3,
    title: "Nature",
    image: "trophy.png",
    path: "/categories/nature",
    bg: "bg-blue-200",
  },
  {
    id: 4,
    title: "Weather",
    image: "trophy.png",
    path: "/categories/weather",
    bg: "bg-red-200",
  },
  {
    id: 5,
    title: "Countries",
    image: "trophy.png",
    path: "/categories/countries",
    bg: "bg-pink-200",
  },
  {
    id: 6,
    title: "Cars",
    image: "trophy.png",
    path: "/categories/cars",
    bg: "bg-yellow-200",
  },
];

const Contents = () => {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-5 py-12 md:py-20">
      <div>
        <h1 className="text-2xl font-semibold">Let&apos;s Play</h1>
        <p className="py-2 text-lg">Choose a category to start playing</p>
      </div>
      <div className="py-8 grid sm:grid-auto-fit-xl w-full gap-x-2 gap-y-9">
        {categoryData.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
            path={category.path}
            bg={category.bg}
          />
        ))}
      </div>
    </div>
  );
};

export default Contents;
