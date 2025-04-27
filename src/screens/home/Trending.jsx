"use client"

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

const Trending = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? categories.length - 1 : currentIndex - 1)
    }

    // Menafigasi ke gambar selanjutnya
    const nextSlide = () => {
        setCurrentIndex(currentIndex === categories.length - 1 ? 0 : currentIndex + 1)

    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);

    }, [currentIndex])

    const categories = [
        { name: 'Cupcake', items: 22, image: '/images/icons/ice.png', bgClass: 'bg-lime-50' },
        { name: 'Pizza', items: 25, image: '/images/icons/pizza 1.png', bgClass: 'bg-blue-100' },
        { name: 'Kebab', items: 12, image: '/images/icons/kebab 1.png', bgClass: 'bg-yellow-100' },
        { name: 'Salmon', items: 22, image: '/images/icons/salmon 1.png', bgClass: 'bg-purple-100' },
        { name: 'Doughnut', items: 11, image: '/images/icons/doughnut 1.png', bgClass: 'bg-yellow-200' },
        { name: 'Cupcake', items: 22, image: '/images/icons/ice.png', bgClass: 'bg-lime-50' },
        { name: 'Pizza', items: 25, image: '/images/icons/pizza 1.png', bgClass: 'bg-blue-100' },
        { name: 'Kebab', items: 12, image: '/images/icons/kebab 1.png', bgClass: 'bg-yellow-100' },
        { name: 'Salmon', items: 22, image: '/images/icons/salmon 1.png', bgClass: 'bg-purple-100' },
        { name: 'Doughnut', items: 11, image: '/images/icons/doughnut 1.png', bgClass: 'bg-yellow-200' },
      ];

    return (
    <section className="w-full px-10 py-10 mt-130 bg-white">
        <div className="ml-[-10] mb-5 sm:mb-10 sm:ml-20">
            <h2 className="text-sm sm:text-2xl font-bold text-gray-900">Browser Our Category</h2>
            <p className="text-sm sm:text-lg font-semibold text-lime-600">Receipt</p>
        </div>
        <div className="w-[1,333px] h-[573px] sm:ml-20 overflow-x-hidden">

            <div className="flex space-x-6 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 230}px)` }}>
                <div className="flex space-x-6">
                    {
                        categories.map((category, index) => (
                            <div key={index} className={`${category.bgClass} w-[230px] h-[140px] rounded-lg flex flex-col justify-center items-center shadow-sm view`}>
                                    <div className="sm:absolute card-hover sm:w-[240px] sm:h-[50px] sm:bg-cover sm:bg-center sm:opacity-50"></div>
                                    <Image 
                                        width={100} height={100} quality={100}
                                        src={category.image} alt={category.name} className="w-10 h-10 mb-2 z-10" />
                                    <p className="text-sm font-medium text-gray-800 z-10">{category.name}</p>
                                    <p className="text-xs text-gray-500 z-10">{category.items} Items</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="hidden sm:flex sm:justify-end sm:space-x-4 sm:mt-10">
                <Button 
                    onClick={prevSlide}
                    className="flex items-center w-[113px] gap-2 bg-[#8BAC3E] text-white px-4 py-2 rounded-full text-s">
                    <span className="rounded-full w-[33px] h-[33px] text-[#8BAC3E] bg-white flex justify-between items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </span> 
                    PREV
                </Button>
                <Button 
                    onClick={nextSlide}
                    className="flex items-center gap-2 w-[113px] bg-[#8BAC3E] text-white py-2 rounded-full text-s">
                    NEXT 
                    <span className="rounded-full w-[33px] h-[33px] text-[#8BAC3E] bg-white flex justify-between items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                </Button>
            </div>
        </div>
    </section>

    )
}

export default Trending;