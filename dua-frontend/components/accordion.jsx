"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import Image from "next/image";
import category_img from "@/public/category.png";

const AccordionItem = ({ item, isOpen, onClick, subcategories }) => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];
  console.log(path);
  console.log(isOpen);
  const router = useRouter();
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, subcategories]);

  const handleClick = (e) => {
    e.stopPropagation();
    router.push(`/${item.cat_id}`);
    // onClick(item.cat_id);
  };

  return (
    <div className="">
      <div onClick={handleClick} className="w-full">
        <summary
          className={`${
            isOpen ? "bg-[#E8F0F5]" : ""
          } relative list-none cursor-pointer hover:bg-[#E8F0F5] p-2 rounded-xl focus-visible:outline-none transition-colors duration-300 group-hover:bg-[#E8F0F5]`}
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
          {subcategories && subcategories.length > 0 ? (
            <ul className="relative flex flex-col gap-1 py-2 pl-4 before:absolute before:top-0 before:left-4 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-[var(--primary)] ">
              {subcategories.map((sub) => (
                <li
                  key={sub.subcat_id}
                  role="article"
                  className="relative pl-4 "
                >
                  <div className="flex flex-col flex-1 gap-4">
                    <a
                      href="#"
                      className="absolute  inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4"
                    >
                      <img
                        src="icons/Ellipse.png"
                        alt="user name"
                        title="user name"
                        width="8"
                        height="8"
                        className="max-w-full rounded-full"
                      />
                    </a>
                    <h4 className="flex flex-col items-start leading-8 md:flex-row lg:items-center">
                      {sub.subcat_name_en}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="italic text-sm text-gray-400">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

const CategoryAccordion = () => {
  const pathname = usePathname();
  const [categories, setCategories] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [subcatMap, setSubcatMap] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/categories", {
          cache: "force-cache",
        });
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const catId = pathname.split("/")[1];
    if (catId) {
      handleToggle(Number(catId), false);
    }
  }, [pathname, categories]);

  const handleToggle = async (catId, shouldPush = true) => {
    if (catId === openId) return;

    if (!subcatMap[catId]) {
      try {
        const res = await fetch(
          `http://localhost:4000/api/subcategories/${catId}`,
          {
            cache: "force-cache",
          }
        );
        const data = await res.json();
        setSubcatMap((prev) => ({ ...prev, [catId]: data }));
      } catch (err) {
        console.error("Error fetching subcategories:", err);
        return;
      }
    }

    setOpenId(catId);
  };

  return (
    <div className=" overflow-y-auto h-[calc(100vh-200px)] scrollbar-thin mt-4 ">
      {categories.map((item) => (
        <AccordionItem
          key={item.cat_id}
          item={item}
          isOpen={openId === item.cat_id}
          onClick={handleToggle}
          subcategories={subcatMap[item.cat_id]}
        />
      ))}
    </div>
  );
};

export default CategoryAccordion;
