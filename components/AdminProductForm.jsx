"use client";
import { useState } from "react";

export default function AdminProductForm({ initial }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [price, setPrice] = useState(initial?.price || []);
  const [inStock, setInStock] = useState(initial?.inStock || []);
  const [description, setDescription] = useState(initial?.description || "");
  const [imageUrl, setImageUrl] = useState(initial?.imageUrl || "");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function upload() {
    if (!file) return;
    setLoading(true);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();
    setImageUrl(data.url);
    setLoading(false);
  }

  async function save() {
    const payload = {
      title,
      slug,
      price: Number(price),
      inStock: Number(inStock),
      description,
      imageUrl,
    };
    const method = initial?._id ? "PUT" : "POST";
    const url = initial?._id ? `/api/products/${initial._id}` : "/api/products";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) alert("Failed");
    else window.location.reload();
  }

  return (
    <div className="bg-black p-6 rounded-2xl shadow-lg space-y-4 border border-gray-800">
      {/* Title */}
      <input
        className="bg-black border border-gray-700 rounded-2xl p-3 w-full text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder=" Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Slug */}
      <input
        className="bg-black border border-gray-700 rounded-2xl p-3 w-full text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Project Reference Number"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />

      {/* Price + Stock */}
      <div className="flex gap-3">
        <input
          className="bg-black border border-gray-700 rounded-2xl p-3 w-full text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          type="number"
          placeholder="Value (₦)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="bg-black border border-gray-700 rounded-2xl p-3 w-full text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
          type="number"
          placeholder="Duration"
          value={inStock}
          onChange={(e) => setInStock(e.target.value)}
        />
      </div>

      {/* Description */}
      <textarea
        className="bg-black border border-gray-700 rounded-2xl p-3 w-full text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        rows={4}
        placeholder="Give a Detailed Description of Your Project"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Upload */}
      <div className="flex items-center gap-3">
        <input
          type="file"
          className="text-gray-300 border border-gray-700 p-2 rounded-2xl bg-black"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button
          onClick={upload}
          className="bg-blue-300 hover:bg-gray-600 text-white px-8 p-1 rounded-2xl transition"
        >
          {loading ? "Uploading..." : "Upload File"}
        </button>
      </div>

      {imageUrl && (
        <img className="rounded" src={imageUrl} alt="" />
        // <p className="text-sm text-green-400 break-all">
        //   ✅ Image uploaded: {imageUrl}
        // </p>
      )}

      {/* Save */}
      <button
        onClick={save}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-2xl font-medium transition w-full"
      >
        {initial?._id ? "Update Project Report" : "Create Project Report"}
      </button>
    </div>
  );
}
