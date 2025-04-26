
const Landing = () => {
    const trendingItems = [
        { name: 'Pizza Paperoni', category: "Pizza", rating: 4, image: '/images/landing/pizza-paperoni.png', bgClass: 'bg-purple-100' },
        { name: 'Pizza Meat', category: "Pizza", rating: 4, image: '/images/landing/pizza-meat.png', bgClass: 'bg-yellow-200' },
        { name: 'Doner Kebab', category: "Kebab", rating: 4, image: '/images/landing/doner-kebab.png', bgClass: 'bg-lime-50' },
        { name: 'Salmon Roll', category: "Salmon", rating: 4, image: '/images/landing/pizza-paperoni.png', bgClass: 'bg-blue-100' },
        { name: 'Cupcake Choco', category: "Cupcake", rating: 4, image: '/images/landing/cupcake-coco.png', bgClass: 'bg-yellow-100' },
        { name: 'Doughnut Milk', category: "Doughnut", rating: 4, image: '/images/landing/donat-unicorn.png', bgClass: 'bg-purple-100' },
        { name: 'Doughnut Unicorn', category: "Doughnut", rating: 4, image: '/images/landing/donat-unicorn.png', bgClass: 'bg-yellow-200' },
        { name: 'Kathi kebab', category: "Kebab", rating: 4, image: '/images/landing/donat-unicorn.png', bgClass: 'bg-yellow-200' },
    ]
  return (
    <section className="w-full mt-[-300] sm:w-[1440px] sm:h-[1039px] bg-white sm:mt-[-200]">
        <div className="ml-12 sm:ml-0 sm:m-x-auto sm:w-[1,333px] sm:h-[573px]">
            <div className="ml-[-10] mb-5 sm:mb-10 sm:ml-30">
                    <h2 className="text-sm sm:text-2xl font-bold text-gray-900">Browser Our Trending</h2>
                    <p className="text-sm sm:text-lg font-semibold text-lime-600">Receipt</p>
            </div>
            <div className="grid grid-cols-1 gap-4 ml-[-3] sm:grid sm:grid-cols-3 sm:gap-5 sm:ml-30">
                {
                    trendingItems.map((item, index) => (
                        <div key={index} className={`${item.bgClass} rounded-[17px] p-4 sm:w-[287.5px] sm:h-[306px] sm:rounded-[17px]`}>
                            <div className="w-[118.15] h-[120px] object-contain mb-4">
                                <img      
                                width={139} height={139} quality={100}
                                src={item.image} alt={item.name} className="w-full h-full object-cover rounded-[17px]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black">{item.name}</h3>
                                <p className="text-green-500">{item.category}</p>
                                <p className="mt-2 text-yellow-500">{'⭐'.repeat(item.rating)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  );
}

export default Landing;