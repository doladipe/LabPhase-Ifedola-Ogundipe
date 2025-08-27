import Product from "../../../../models/Product";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../../lib/auth";
import { connectDB } from "../../../../lib/mongodb";

export async function GET(req) {
  await connectDB();
  const products = await Product.find({}).sort({ crearedAt: -1 });
  return NextResponse.json(products);
}

// for the admin to add products to the database
export async function POST(req) {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin")
    return new NextResponse("Unauthorized", { status: 401 });
  const body = await req.json();
  const created = await Product.create(body);
  return NextResponse.json(created, { status: 201 });
}
