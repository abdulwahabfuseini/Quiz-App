import Navbar from "@/components/Navbar";
import Contents from "@/components/category/Contents";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Quiz App | Categories",
  description: "Choose a category to start playing",
};

const Categories = () => {
  return (
    <>
      <Navbar />
      <Contents />
    </>
  );
};

export default Categories;
