"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import category_img from "@/public/category.png";
import Link from "next/link";
const AccordionItem = ({ item, isOpen, onClick }) => {
  const pathname = usePathname();
  const router = useRouter();
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  const handleClick = (e) => {
    e.stopPropagation();
    router.push(`/${item.cat_id}`);
  };

  return (
    <div>
      <div onClick={handleClick} className="w-full my-0.5">
        <summary
          className={`${
            isOpen
              ? "bg-[#E8F0F5] dark:bg-gray-700 dark:border border-gray-500 "
              : ""
          } relative list-none cursor-pointer hover:bg-[#E8F0F5] dark:bg-gray-700 dark:hover:outline outline-gray-500 p-2 rounded-xl focus-visible:outline-none transition-colors duration-300 group-hover:bg-[#E8F0F5]`}
        >
          <div className="flex justify-between items-center">
            <div className="flex">
              <Image src={category_img} alt="category" />
              <div className="pl-4">
                <p className="text-[var(--primary)]">{item.cat_name_en}</p>
                <p className="text-sm text-[#7E7E7E]">
                  Subcategory : {item.no_of_subcat}
                </p>
              </div>
            </div>
            <div>
              <p>{item.no_of_dua}</p>
              <p className="text-sm text-[#7E7E7E]">Duas</p>
            </div>
          </div>
        </summary>
      </div>

      <div
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: isOpen ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="pb-4 px-2">
          {item.subcategories && item.subcategories.length > 0 ? (
            <ul className="relative flex flex-col gap-1 py-2 pl-4 before:absolute before:top-0 before:left-4 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-[var(--primary)] ">
              {item.subcategories.map((sub) => (
                <li
                  key={sub.subcat_id}
                  role="article"
                  className="relative pl-4"
                >
                  <Link
                    href={`#${sub.subcat_id}`}
                    className="flex flex-col flex-1 gap-4 hover:text-[var(--primary)]"
                  >
                    <div className="absolute inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4">
                      <img
                        src="icons/Ellipse.png"
                        alt="user name"
                        title="user name"
                        width="8"
                        height="8"
                        className="max-w-full rounded-full"
                      />
                    </div>
                    <h4 className="flex flex-col items-start leading-8 md:flex-row lg:items-center">
                      {sub.subcat_name_en}
                    </h4>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="italic text-sm text-gray-400">No subcategories</p>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryAccordion = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}api/categories-with-subcategories`,
          {
            cache: "force-cache",
          }
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories with subcategories:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const catId = Number(pathname.split("/")[1]);
    if (catId) {
      setOpenId(catId);
    }
  }, [pathname]);

  const handleToggle = (catId) => {
    setOpenId((prevId) => (prevId === catId ? null : catId));
  };

  return (
    <div className="overflow-y-auto w-full absolute h-[calc(100vh-100px)] p-4 scrollbar-thin mt-1">
      <div className="relative mb-4 w-full">
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Categories"
          aria-label="Search content"
          className="relative w-full h-12 pl-12 pr-4 transition-all border-2 rounded outline-none peer border-slate-200 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-3.5 left-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-label="Search icon"
          role="graphics-symbol"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      {categories
        .filter((item) =>
          item.cat_name_en.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => (
          <AccordionItem
            key={item.cat_id}
            item={item}
            isOpen={openId === item.cat_id}
            onClick={() => handleToggle(item.cat_id)}
          />
        ))}
    </div>
  );
};

export default CategoryAccordion;
