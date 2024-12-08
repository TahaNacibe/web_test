"use client";
import React, { useState } from 'react';

// Define your colors Map
let colors = new Map<string, string>([
    ["galaxy-s24-ultra-highlights-color-titanium-black-back-mo.jpg", "bg-black"],
    ["galaxy-s24-ultra-highlights-color-titanium-gray-back-mo.jpg", "bg-gray-400"],
    ["galaxy-s24-ultra-highlights-color-titanium-blue-back-mo.jpg", "bg-blue-500"],
    ["galaxy-s24-ultra-highlights-color-titanium-green-back-mo.jpg", "bg-green-500"],
    ["galaxy-s24-ultra-highlights-color-titanium-orange-back-mo.jpg", "bg-orange-500"],
    ["galaxy-s24-ultra-highlights-color-titanium-violet-back-mo.jpg", "bg-violet-500"],
    ["galaxy-s24-ultra-highlights-color-titanium-yellow-back-mo.jpg", "bg-yellow-500"],
]);

export default function ColorDisplaySection() {
    const [selectedImage, setSelectedImage] = useState<string>(Array.from(colors.keys())[0]);

    return (
        <section className="p-8 h-screen w-screen flex flex-col  md:flex-row items-center justify-evenly space-y-8" id='colorDisplay'>
            <div className="flex flex-col items-center slideContainer">
                {/* Display the currently selected image */}
                <div className="w-100 h-100 rounded-lg overflow-hidden">
                    <img 
                        src={`images/colors/${selectedImage}`}
                        alt="Selected color" 
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* Row of color options */}
                <div className="pt-4 flex space-x-2">
                    {Array.from(colors.entries()).map(([image, bgColor]) => (
                        <div 
                            key={image} 
                            className={`w-8 h-8 ${bgColor} rounded-full cursor-pointer transition-transform transform hover:scale-105`} 
                            onClick={() => setSelectedImage(image)} 
                        />
                    ))}
                </div>
            </div>
            
            {/* Color description */}
            <div className="text-center">
                <h1 className="font-extralight text-5xl slideInText">
                    With So Many Colors, To Cover All Tastes 
                </h1>
            </div>
        </section>
    );
}
