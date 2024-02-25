import { CategoryProps } from "@/contexts/Types";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ title, image, path, bg }: CategoryProps) => {
  return (
    <div>
      <Link href={path}>
        <div
          className={`${bg} flex justify-between sm:gap-x-6 gap-y-4 w-full relative shadow-lg rounded-xl`}
        >
          <div className="text-white font-bold text-2xl px-4 py-5 grid gap-y-2 leading-10">
            <Image
              src="/SVG/play.gif"
              width={40}
              height={40}
              alt="play"
              className="object-contain"
            />
            <h1>{title}</h1>
          </div>

          <Image
            src={`/SVG/${image}`}
            width={120}
            height={120}
            alt="quiz"
            className="object-contain absolute -top-8 right-2"
          />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
