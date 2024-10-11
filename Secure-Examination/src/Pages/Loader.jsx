import React from 'react';
import Lottie from 'lottie-react';
import PreLoader from '../Lottie/PreLoader.json';

function Loader({ isVisible }) {
    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Lottie animationData={PreLoader} loop={true} className="w-full max-w-xs lg:max-w-md" />
        </div>
    );
}

export default Loader;
