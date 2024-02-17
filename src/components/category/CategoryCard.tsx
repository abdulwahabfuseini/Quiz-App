import { CategoryProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

const CategoryCard = ({ title, image, path, bg }: CategoryProps) => {
  return (
    <div>
      <Link href={path}>
        <div
          className={`${bg} flex justify-between sm:gap-x-6 gap-y-4 w-full relative shadow-lg rounded-xl`}
        >
          <div className="text-white font-bold text-xl px-4 py-6 grid gap-y-2 leading-10">
            <FaPlay  />
            <h1>{title}</h1>
          </div>

          <Image
            src={`/SVG/${image}`}
            width={90}
            height={90}
            alt="quiz"
            className="object-contain absolute -top-6 right-2"
          />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
