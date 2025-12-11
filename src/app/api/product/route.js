
import { connectDB } from '@/lib/db';
import Product from '@/models/Product';

export const GET = async () => {
    await connectDB();
     const products = await Product.find({}).sort({ createdAt: -1 });
    return Response.json(products);
}

export const POST = async (req) => {
    await connectDB();
    const body = await req.json();
    console.log("Received payload:", body); // Check what frontend is sending

    const product = await Product.create(body);
    return Response.json(product, { status: 201 });
}