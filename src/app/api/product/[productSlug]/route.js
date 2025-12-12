import { connectDB } from '@/lib/db';
import Product from '@/models/Product';

export const GET = async ({ params }) => {
    await connectDB();

    const { id } = params; // get id from route /products/:id
    const product = await Product.findById(id);
    return Response.json(product);



}