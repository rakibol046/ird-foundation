import React from "react";
import getAllCategories from "@/lib/category/getAllCategories";
import Link from "next/link";
import Image from "next/image";
import cat from "@/public/category.png";
export default async function DuaPage() {
  const categories = await getAllCategories();
  return (
    <>
      <h1 className="text-2xl text-center font-bold p-4">Categories of Dua</h1>
      <div className="m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   justify-center">
        {categories.map((category) => (
          <Link
            key={category.cat_id}
            href={`${category.cat_id}`}
            className="outline outline-gray-300 bg-white dark:bg-gray-700 dark:text-white  flex p-2 m-4 gap-4 items-center rounded-2xl"
          >
            <Image src={cat} alt="cat" />
            <div className="">
              <p>{category.cat_name_en}</p>
              <p>{category.no_of_subcat} Subcategories</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
