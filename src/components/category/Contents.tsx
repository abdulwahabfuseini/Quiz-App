

import CategoryCard from "./CategoryCard";

const categoryData = [
  {
    id: 1,
    title: "Programming",
    image: "brain.gif",
    path: "/categories/programming",
    bg: "red-background",
  },
  {
    id: 2,
    title: "Sports",
    image: "ball.gif",
    path: "/categories/sports",
    bg: "light-background",
  },
  {
    id: 3,
    title: "Nature",
    image: "park.gif",
    path: "/categories/nature",
    bg: "yellow-background",
  },
  {
    id: 4,
    title: "Weather",
    image: "weather.gif",
    path: "/categories/weather",
    bg: "green-background",
  },
  {
    id: 5,
    title: "Countries",
    image: "world.gif",
    path: "/categories/countries",
    bg: "aqua-background",
  },
  {
    id: 6,
    title: "Entertainment",
    image: "music.gif",
    path: "/categories/cars",
    bg: "black-background",
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
