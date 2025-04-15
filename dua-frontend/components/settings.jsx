"use client";
import Image from "next/image";
import setting from "@/public/icons/all-duas.png";
import { useTheme } from "next-themes";

export default function SettingsPanel() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="">
      <h1 className="text-xl font-semibold text-center py-6">Settings</h1>
      <div className="text-[#868686]  p-4">
        <details className="group w-full rounded-2xl">
          <summary className="relative flex gap-3 bg-[#F7F8FA] dark:bg-gray-700 dark:border border-gray-500 dark:text-white px-3 py-2  items-center  cursor-pointer list-none  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <Image src={setting} alt="setting" />
            <span> Language Settings</span>
          </summary>
          <p className="py-4 px-2 shadow">Item</p>
        </details>
        <details className=" group w-full rounded mt-4">
          <summary className="relative flex gap-2 bg-[#F7F8FA] dark:bg-gray-700 dark:border border-gray-500 dark:text-white px-3 py-2 items-center  cursor-pointer list-none  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <Image src={setting} alt="setting" />
            <span> General Settings</span>
          </summary>
          <p className="py-4 px-2 shadow">Item</p>
        </details>
        <details className="group w-full rounded mt-4">
          <summary className="relative flex gap-2 bg-[#F7F8FA] dark:bg-gray-700 dark:border border-gray-500 dark:text-white px-3 py-2  items-center  cursor-pointer list-none  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <Image src={setting} alt="setting" />
            <span> Font Settings</span>
          </summary>
          <p className="py-4 px-2 shadow">Item</p>
        </details>
        <details className="group w-full rounded mt-4" open>
          <summary className="relative flex gap-2 bg-[#F7F8FA] dark:bg-gray-700 dark:border border-gray-500 dark:text-white px-3 py-2  items-center  cursor-pointer list-none  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            <Image src={setting} alt="setting" />
            <span> Appearance Settings</span>
          </summary>
          <div className="py-4 px-2 shadow text-gray-700 dark:bg-gray-700 dark:text-white flex justify-between items-center">
            <p className="">Night Mode</p>
            <input
              onClick={toggleTheme}
              className="peer relative h-4 w-8 cursor-pointer appearance-none rounded-lg bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-4 after:w-4 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-emerald-200 checked:after:left-4 checked:after:bg-emerald-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-emerald-300 checked:after:hover:bg-emerald-600 focus:outline-none checked:focus:bg-emerald-400 checked:after:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
              type="checkbox"
              value=""
              id="id-c01"
            />
          </div>
        </details>
      </div>
    </div>
  );
}
