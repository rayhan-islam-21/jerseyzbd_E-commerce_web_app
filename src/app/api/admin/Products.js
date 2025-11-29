import connectDB from "@/lib/dib";
import Product from "@/Models/product";

const handler = async (req, res) => {
    await connectDB();

    //post method//
    if (req.method === "POST") {
        try {
            const { name, price, image, description, category } = req.body;
            if (!name || !price || !image) {
                return res.status(400).json({ message: "Name,price and image are required" });
            }
            const newProduct = await Product.create({ name, price, image, description, category });
            return res.status(201).json({ success: true, product: newProduct });
        }
        catch (error) {
            res.status(500).json({ message: "Server Error", error: error.message });
        }
    }
    //GEt method//
    else if (req.method === "GET") {
        try {
            const products = await Product.find().sort({ createdAt: -1 });
            return res.status(200).json({ success: true, products });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "server error" })
        }
    }
    else if (method === "PATCH") {
        try {
            const { id, ...updates } = req.body;
            if (!id) return res.status(400).json({ message: "product id is rquired" });
            const updateProduct = await Product.findByIdAndUpdate(id, updates, {
                new: true,
                runValidators: true
            });
            if (!updateProduct) return res.status(404).json({ message: "product not found" });

            return res.status(200).json({ success: true, product: updateProduct });

        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "Server Error" });
        }
    }
    // DELETE - Remove Product //
    else if (method === "DELETE") {
        try {
            const { id } = req.body;
            if (!id) return res.status(400).json({ message: "Product ID is required" });
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct)
                return res.status(404).json({ message: "Product not found" });
            return res.status(200).json({ success: true, message: "Product deleted successfully" });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: "Server Error" });
        }
    }
    else {
        return res.status(400).json({ message: "Invalid request method" });
    }
}

export default handler;