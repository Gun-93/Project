import { useMemo, useState } from "react";
import products from "../Components/Product.js";
import { useCart } from "../Components/CartContext.jsx";

const categories = ["All", "Jackets", "Shirts", "Pants", "Hoodies"];

export default function Products() {
  const { addToCart } = useCart();
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const filtered = useMemo(() => {
    return products
      .filter((p) => (category === "All" ? true : p.category === category))
      .filter((p) =>
        q ? p.name.toLowerCase().includes(q.toLowerCase()) : true
      )
      .filter((p) => (minPrice ? p.price >= Number(minPrice) : true))
      .filter((p) => (maxPrice ? p.price <= Number(maxPrice) : true));
  }, [q, category, minPrice, maxPrice]);
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20230519/original/pngtree-store-with-hanging-clothing-in-a-high-end-environment-picture-image_2654941.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment:"fixed",
      }}>
     <div className="absolute inset-0 bg-black/1 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto p-6 bg-white/70 rounded-2xl shadow-xl backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">🛍️ Clothing Store</h1>
        {/*for filters*/}
        <div className="grid gap-3 sm:grid-cols-4 mb-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products…"
            className="p-2 border rounded focus:ring-2 focus:ring-blue-400"/>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded focus:ring-2 focus:ring-blue-400">
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min price"
            className="p-2 border rounded focus:ring-2 focus:ring-blue-400"/>
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max price"
            className="p-2 border rounded focus:ring-2 focus:ring-blue-400"/>
        </div>
        {/*Products*/}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <div
                key={p.id}
                className="border rounded-lg p-4 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition transform hover:-translate-y-1" >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-contain rounded"/>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-800">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.category}</p>
                  <p className="mt-1 font-bold text-blue-600">₹{p.price}</p>
                  <button
                    onClick={() => addToCart(p)}
                    className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No products match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
}






