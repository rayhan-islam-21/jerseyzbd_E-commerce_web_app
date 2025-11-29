import LoginForm from '@/Components/auth/Loginform';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const layout = () => {
    return (
       <div className="min-h-screen  flex items-center justify-center">
      <div className="md:p-3 p-2">
        <div className="grid md:grid-cols-1  bg-white shadow-xl md:rounded-2xl rounded-xl overflow-hidden">

          {/* Form Side */}
          <div className="flex flex-col justify-center p-3 md:px-8 md:py-10">
            <div className="mb-8 md:text-start text-center">
              <Link href="/">
                <h1 className="text-2xl md:text-3xl font-bold text-blue-700 hover:text-blue-900 transition-colors">
                  Jerseyz
                </h1>
              </Link>
            </div>
            <div className="w-full"><LoginForm/></div>
          </div>

          {/* Image Side */}
          <div className="hidden md:hidden relative">
            <Image
              src="/auth_img.jpeg"
              alt="Auth Image"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </div>
    );
};

export default layout;