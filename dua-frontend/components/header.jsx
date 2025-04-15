import Image from "next/image";
import profile from "@/public/profile.png";

export default function Header() {
  return (
    <div className=" p-4 flex justify-between items-center">
      <p className="text-2xl font-bold">Dua Page</p>
      <div className="flex gap-4">
        <div className="relative lg:mr-64">
          <input
            type="search"
            placeholder="Search by Dua name"
            aria-label="Search content"
            className="relative bg-white w-full lg:w-96 h-12 px-4 pr-12 transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-3.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
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
        <div className="account inline-flex justify-center items-center gap-2">
          <Image src={profile} alt="profile" className="rounded-full" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-labelledby="t-01 d-01"
            role="graphics-symbol"
          >
            <title id="t-01">Button icon</title>
            <desc id="d-01">An icon describing the buttons usage</desc>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
