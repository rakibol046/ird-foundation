import Catrgories from "@/components/categories";
import DuaCard from "@/components/dua-card";
import SettingsPanel from "@/components/settings";
import React from "react";
import getDuaByCategory from "@/lib/category/getDuaByCategory";

export default async function DuaPage({ params }) {
  const { category_id } = await params;
  console.log(category_id);
  const data = await getDuaByCategory(category_id);
  return (
    <div className="flex  gap-[30px]">
      <div className="categories ml-[30px] hidden lg:block bg-white shadow sticky top-4 flex-none w-[429px] h-full rounded-xl overflow-auto">
        <Catrgories />
      </div>
      <div className="content w-full">
        {data.map((cat, i) => (
          <div key={i}>
            <div className="mb-4 bg-white rounded shadow px-8 py-4">
              <span className="text-[var(--primary)] font-semibold">
                Section:{" "}
              </span>
              {cat?.subcat_name_en}
            </div>

            {cat?.duas?.map((dua, i) => (
              <DuaCard key={i} dua={dua} />
            ))}
          </div>
        ))}
      </div>
      <div className="setting-panel bg-white shadow-sm sticky top-4  flex-none  hidden lg:block w-[330px] overflow-y-auto h-[calc(100vh-40px)] rounded-3xl">
        <SettingsPanel />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const data = await getDuaByCategory();

  return data.map((cat) => ({
    id: cat.cat_id.toString(),
  }));
}
