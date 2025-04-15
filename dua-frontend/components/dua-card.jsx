import Image from "next/image";
import video from "@/public/video.png";
import allah from "@/public/allah.png";

import copy from "@/public/icons/copy.png";
import Vector from "@/public/icons/Vector.png";
import Group from "@/public/icons/Group.png";
import share from "@/public/icons/share.png";
import report from "@/public/icons/report 1.png";

export default function DuaCard({ dua }) {
  // console.log("dua : ", dua);
  return (
    <div className="bg-white  text-[#393939] dark:bg-gray-700 dark:text-white rounded shadow-xs px-8 py-4 mb-4">
      <div className="flex items-center gap-4  mb-4">
        <Image src={allah} alt="allah" />
        <h3 className="font-semibold text-primary">
          {dua?.dua_id}. {dua?.dua_name_en}
        </h3>
      </div>
      <p className=" mb-4">{dua.top_en}</p>
      <div className="text-right font-arabic text-2xl leading-loose mb-4">
        {dua.dua_arabic}
      </div>
      {dua?.transliteration_en ? (
        <p className=" mb-4">
          <span className="font-semibold">Transliteration:</span>{" "}
          {dua?.transliteration_en}
        </p>
      ) : (
        ""
      )}
      {dua?.translation_en ? (
        <p className="mb-4">
          <span className="font-semibold">Translation:</span>{" "}
          {dua?.transliteration_en}
        </p>
      ) : (
        ""
      )}
      {dua?.translation_en ? (
        <div>
          <p className="font-semibold text-[var(--primary)]">Reference: </p>
          <p className=" font-semibold">{dua?.refference_en}</p>{" "}
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between items-center mt-4">
        {dua?.audio ? <Image src={video} alt="video icon" /> : <span></span>}
        <div className="flex gap-4 lg:gap-10">
          <button className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <Image src={copy} alt="video icon" />
          </button>
          <button className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <Image src={Vector} alt="video icon" />
          </button>
          <button className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <Image src={Group} alt="video icon" />
          </button>
          <button className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <Image src={share} alt="video icon" />
          </button>
          <button className="cursor-pointer hover:bg-gray-200 p-2 rounded-full">
            <Image src={report} alt="video icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
