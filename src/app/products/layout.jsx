
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='grid grid-cols-[100px_1fr] gap-12'>
            <div>
                <h1>Rayhan  </h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default layout;