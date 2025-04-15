import Image from "next/image";
import category from "@/public/category.png";
import getAllCategories from "@/lib/category/getAllCategories";
import Link from "next/link";

import Accordion from "./accordion";

export default async function Catrgories() {
  console.log("h");
  const categories = await getAllCategories();
  return (
    <div className="">
      <h3 className=" text-center bg-primary p-4 font-semibold">Categories</h3>
      <div className="p-4">
        <Accordion />
      </div>
    </div>
  );
}
