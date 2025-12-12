import api from '@/lib/axios';
import React, { useEffect } from 'react';

const SingleProduct =  async ({params}) => {
    const {productSlug} = await params;
    console.log(productSlug)
     const singleProductdata = async ()=>{
        await api.get('/products')
     }

    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default SingleProduct;