import { connectDB } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  await connectDB();
  const p = await Product.findById(params.id).lean();
  if (!p) return <div>Not found</div>;

  return (
    <div className="bg-black p-6 rounded-xl shadow">
      {p.imageUrl && (
        <Image
          src={p.imageUrl}
          alt={p.title}
          width={800}
          height={600}
          className="rounded w-96 h-auto hover:scale-105 transition"
        />
      )}
      <h1 className="text-3xl font-bold mt-4">{p.title}</h1>
      <p className="text-gray-600 mt-2">N{p.price}</p>
      <p className="mt-4">{p.description}</p>
      <button className="mt-6 px-6 py-4 rounded-3xl bg-green-500">
        Download Report
      </button>
    </div>
  );
}
