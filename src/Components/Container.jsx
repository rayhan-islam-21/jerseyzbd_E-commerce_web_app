import { cn } from '@/Utils/cn';
import React from 'react';

const Container = ({children,classname}) => {
    return (
        <div className={cn("max-w-screen-xl mx-auto px-4",classname)}>
            {children}
        </div>
    );
};

export default Container;