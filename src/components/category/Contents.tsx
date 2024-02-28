import Image from "next/image";
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
    title: "Geography",
    image: "world.gif",
    path: "/categories/geography",
    bg: "aqua-background",
  },
  {
    id: 6,
    title: "Entertainment",
    image: "music.gif",
    path: "/categories/entertainment",
    bg: "black-background",
  },
];

const Contents = () => {
  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-5 py-24 sm:py-32 lg:py-24">
      <div className="">
        <div className="relative w-full">
          <h1 className="text-4xl font-bold relative">Let&apos;s Play</h1>
          <Image
            src="/SVG/quiztime.png"
            width={100}
            height={100}
            alt="logo"
            className=" object-contain -top-14 left-5 absolute shake-bounce "
          />
        </div>
        <p className="py-2 text-xl">Choose a category to start playing</p>
      </div>
      <div className="py-8 grid grid-auto-fit w-full gap-x-2 gap-y-9">
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
