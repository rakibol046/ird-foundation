// lib/products/getAllProducts.js
export default async function getDuaByCategory(category_id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/subcategories-with-duas/${category_id}`,
    {
      // cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
