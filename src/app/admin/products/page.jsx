import { connectDB } from "../../../../lib/mongodb";
import Product from "../../../../models/Product";
import AdminProductForm from "../../../../components/AdminProductForm";
import { revalidatePath } from "next/cache";

async function deleteProduct(id) {
  "use server";
  await connectDB();
  await Product.findByIdAndDelete(id);
  console.log("Product was deleted");
  revalidatePath("/products");
}

export default async function AdminProducts() {
  await connectDB();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();

  return (
    <div className="min-h-screen bg-black text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Admin Project Page</h1>

      {/* Create New */}
      <div className="flex flex-col md:flex-row">
        <section className="bg-black  p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Create New Project
          </h2>
          <AdminProductForm />
        </section>

        {/* Existing */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Created Projects
          </h2>
          <div className="space-y-6">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-black p-6 rounded-2xl shadow-lg border border-gray-800"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {p.title}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {p.slug} • N{p.price} • Duration (Days):{" "}
                      <span className="text-green-400">{p.inStock}</span>
                    </div>
                  </div>
                  <form action={deleteProduct.bind(null, p._id.toString())}>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition">
                      Delete
                    </button>
                  </form>
                </div>

                {/* Edit Form */}
                <div className="mt-4 border-t border-gray-800 pt-4">
                  <AdminProductForm initial={{ ...p, _id: p._id.toString() }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
