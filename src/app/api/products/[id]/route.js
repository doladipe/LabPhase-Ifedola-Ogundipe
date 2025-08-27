import { connectDB } from "../../../../../lib/mongodb";
import Product from "../../../../../models/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  await connectDB();
  const doc = await Product.findById(params.id);
  if (!doc) return new NextResponse("Not Found", { status: 404 });
  return NextResponse.json(doc);
}

export async function PUT(req, { params }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin")
    return new NextResponse("Unauthorized", { status: 401 });
  const body = await req.json();
  const updated = await Product.findByIdAndUpdate(params.id, body, {
    new: true,
  });
  return NextResponse.json(updated);
}

export async function DELETE(_, { params }) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin")
    return new NextResponse("Unauthorized", { status: 408 });
  await Product.findByIdAndDelete(params.id);
  return new NextResponse(null, { status: 204 });
}
