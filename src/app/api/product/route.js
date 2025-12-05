import { connectDB } from "@/lib/db";
import   Product  from '@/models/product';

export const GET = async  ()=>{
    connectDB();
    const products = await Product.find({}).sort({createdAt: -1});
    return Response.json(products);
}

export const POST = async (req)=>{
    connectDB();
    const body = await req.json();
    const product = await Product.create(body);
    return Response.json(product,{ status: 201 });
}
