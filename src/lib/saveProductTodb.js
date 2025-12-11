
import api from './axios';

const saveProductTodb = async (data) => {
    try {
        console.log(data);
        await api.post("/product", {
            productName: data.productName,
            productSlug: data.productSlug,
            productPrice: data.productPrice,
            productDiscount: data.productDiscount,
            discountPrice: data.discountPrice,
            productCategory: data.productCategory,
            productDetails: data.productDetails,
            image: data.image,
            images: data.images,
            productStock: data.productStock,
            productTags: data.productTags,
            isFeatured: data.isFeatured,

        })
        console.log("Product saved successfully!");

    }
    catch (err) {
        console.log("Axios error", err)
    }
};

export default saveProductTodb;
