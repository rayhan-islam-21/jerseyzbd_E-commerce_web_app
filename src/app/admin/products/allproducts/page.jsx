import ProductTable from '@/Components/admin/ProductTable';
import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col gap-6  p-4 h-screen'>
            <h1 className='text-2xl text-white font-bold'>All Product List</h1>
           <ProductTable/>
        </div>
    );
};

export default page;