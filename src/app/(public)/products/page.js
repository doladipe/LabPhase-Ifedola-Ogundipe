import { connectDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";
import ProductCard from "../../../../components/ProductCard";

export const revalidate = 60;

export default async function ProductsPage() {
  await connectDB();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={{ ...p, _id: p._id.toString() }} />
        ))}
      </div>
    </div>
  );
}
