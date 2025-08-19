import React, { useState, useEffect } from 'react';

export const BusCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);    
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-md">
            
            <img src={images[currentIndex]} alt={`Imagen del bus`} className="w-full h-auto object-cover rounded-lg shadow-md" />   
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />   
                </svg>
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>      
            </button>
        </div>
    );
}