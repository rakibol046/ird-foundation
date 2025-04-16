import Image from "next/image";
import logo from "@/public/logo.png";
import support from "@/public/support.png";

import home from "@/public/icons/Home.png";
import dua from "@/public/icons/all-duas.png";
import book from "@/public/icons/Book.png";
import bookmark from "@/public/icons/Bookmark.png";
import qa from "@/public/icons/Dua Q&A.png";
import memorize from "@/public/icons/Memorize.png";
import ruqyah from "@/public/icons/Ruqyah.png";
import Link from "next/link";

// import support from "@/public/support.png";
// import support from "@/public/support.png";
// import support from "@/public/support.png";

export default function Aside() {
  return (
    <div className="bg-white dark:bg-gray-300 dark:text-white w-[100px] hidden h-[calc(100vh-40px)] rounded-3xl sticky left-0 top-4 lg:flex flex-col justify-between items-center">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <div>
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="/">
              <Image src={home} alt="icon" />
            </Link>
          </li>

          <li>
            <Image src={dua} alt="icon" />
          </li>
          <li>
            <Image src={memorize} alt="icon" />
          </li>
          <li>
            <Image src={bookmark} alt="icon" />
          </li>
          <li>
            <Image src={ruqyah} alt="icon" />
          </li>
          <li>
            <Image src={qa} alt="icon" />
          </li>
          <li>
            <Image src={book} alt="icon" />
          </li>
        </ul>
      </div>
      <Image className="mb-[0px]" src={support} alt="logo" />
    </div>
  );
}

export function MobileMenu() {
  return (
    <>
      <div className="fixed lg:hidden left-0 bottom-0 w-full bg-[var(--primary)] p-4 shadow-3xl ">
        <ul className="flex gap-5 justify-center items-center">
          <li>
            <Link href="/">
              <Image src={home} alt="icon" />
            </Link>
          </li>
          <li>
            <Image src={dua} alt="icon" />
          </li>
          <li>
            <Image src={memorize} alt="icon" />
          </li>
          <li>
            <Image src={bookmark} alt="icon" />
          </li>
          <li>
            <Image src={ruqyah} alt="icon" />
          </li>
          <li>
            <Image src={qa} alt="icon" />
          </li>
          <li>
            <Image src={book} alt="icon" />
          </li>
        </ul>
      </div>
    </>
  );
}
