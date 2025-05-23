"use client"

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";


const Landing = () => {

    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const allData = [
        { name: 'Pizza Paperoni', category: "Pizza", rating: 4, image: '/images/landing/pizza-paperoni.png', bgClass: 'bg-[#E6F3F5]' },
        { name: 'Pizza Meat', category: "Pizza", rating: 4, image: '/images/landing/pizza-meat.png', bgClass: 'bg-[#E6F3F5]' },
        { name: 'Doner Kebab', category: "Kebab", rating: 4, image: '/images/landing/doner-kebab.png', bgClass: 'bg-[#EAEEFA]' },
        { name: 'Salmon Roll', category: "Salmon", rating: 4, image: '/images/landing/pizza-paperoni.png', bgClass: 'bg-[#F9EEF3]' },
        { name: 'Cupcake Choco', category: "Cupcake", rating: 4, image: '/images/landing/cupcake-coco.png', bgClass: 'bg-[#F0FEEB]' },
        { name: 'Doughnut Milk', category: "Doughnut", rating: 4, image: '/images/landing/donat-unicorn.png', bgClass: 'bg-[#F3F7D9]' },
    ]
    
    const initialData = [
        { name: 'Doughnut Unicorn', category: "Doughnut", rating: 4, image: '/images/landing/donat-unicorn.png', bgClass: 'bg-[#F3F7D9]' },
        { name: 'Kathi kebab', category: "Kebab", rating: 4, image: '/images/landing/donat-unicorn.png', bgClass: 'bg-[#EAEEFA]' },
    ]

    const dataToDisplay = showAll || isMobile ? allData : initialData;


    // Fungsi untuk menangani klik pada tombol
    const handleShowAllClick = () => {
    setShowAll(true);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize(); // Panggil pertama kali untuk mengecek ukuran layar pada saat render
        window.addEventListener('resize', handleResize); // Menambahkan event listener untuk resize
    
        return () => window.removeEventListener('resize', handleResize); // Bersihkan event listener saat komponen unmount
    })

    return (
    <section className="w-full mt-[-300] sm:w-[1440px] sm:h-[1039px] bg-white sm:mt-[-200]">
        <div className="ml-12 sm:ml-0 sm:m-x-auto sm:w-[1,333px] sm:h-[573px]">
            <div className="ml-[-10] mb-5 sm:mb-10 sm:ml-30">
                    <h2 className="text-sm sm:text-2xl font-bold text-gray-900">Browser Our Trending</h2>
                    <p className="text-sm sm:text-lg font-semibold text-lime-600">Receipt</p>
            </div>
            <div className="grid grid-cols-1 gap-4 mr-[50px] sm:mr-0 sm:grid sm:grid-cols-4 sm:gap-5 sm:ml-30">
                {
                    dataToDisplay.map((item, index) => (
                        <div key={index} className={`${item.bgClass} rounded-[17px] p-4 sm:w-[287.5px] sm:h-[306px] sm:rounded-[17px] view-card`}>
                            <div className="sm:absolute landing-hover sm:w-[287.5px] sm:h-[306px] sm:bg-cover sm:bg-center sm:opacity-50"></div>
                            <div className="w-[118.15] h-[120px] object-contain mb-4">
                                <Image      
                                width={139} height={139} quality={100}
                                src={item.image} alt={item.name} className="w-full h-full object-cover rounded-[17px]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black font-rubik text-[26px] leading-[50px] tracking-[0%]">{item.name}</h3>
                                <p className="text-[#8BAC3E] font-rubik font-medium text-[18px] leading-none tracking-[0%]">{item.category}</p>
                                <p className="mt-2 text-yellow-500">{'⭐'.repeat(item.rating)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            {!isMobile && !showAll && (
                <div className="sm:block sm:w-[160px] sm:mt-10 sm:mx-auto sm:h-[50px] sm:rounded-full">
                    <Button className="bg-[#8BAC3E]" onClick={handleShowAllClick}>
                    <span className="text-custom text-center">ALL Receipt</span>
                    </Button>
                </div>
            )}
        </div>
    </section>
  );
}

export default Landing;