import Image from 'next/image';
import Link from 'next/link'; // Pastikan Link diimpor

const Footer = () => {
  return (
    <section className="hidden sm:block sm:w-[1239px] sm:h-[423px] sm:mx-20 sm:mt-100">
        <div className='bg-[#F9FFF6] "flex items-center justify-center w-[1239px] h-[359px] rounded-[20px] mx-auto"'>
            <div className="flex justify-center items-center">
                    <div className="w-[335px] h-[127px] mt-12 ml-5 space-y-10 flex-col items-center justify-center mx-auto]">
                        <Image width={207} height={50} alt="logo image" quality={100} src="/logo.png" />
                        <h3 className='text-custom-footer text-[#757575]'>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, 
                            Daerah Khusus Ibukota Jakarta 12950</h3>
                    </div>
                    <div className="w-[300px] h-[127px] mt-12 ml-16 space-y-10 flex-col items-center justify-center mx-auto text-custom-footer">
                        <h2 className="text-xl font-semibold mb-4">Categories</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-[#8BAC3E] ">Pizza</Link></li>
                            <li><Link href="#" className="hover:text-[#8BAC3E]">Cupcake</Link></li>
                            <li><Link href="#" className="hover:text-[#8BAC3E]">Kebab</Link></li>
                            <li><Link href="#" className="hover:text-[#8BAC3E]">Salmon</Link></li>
                            <li><Link href="#" className="hover:text-[#8BAC3E]">Doughnut</Link></li>
                        </ul>
                    </div>
                    <div className='w-[300px] h-[127px] mt-12 space-y-10 flex-col items-center justify-center mx-auto text-custom-footer'>
                        <h2 className="text-xl font-semibold mb-4">About Us</h2>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-[#8BAC3E]">About Us</Link></li>
                            <li><Link href="#" className="hover:text-[#8BAC3E]">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-[#8BAC3E]">Report Problem</Link></li>
                        </ul>
                    </div>
                    <div className='w-[300px] h-[127px] mt-12 mr-5 space-y-10 flex-col items-center justify-center mx-auto text-custom-footer'>
                            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
                            <p className=" mb-4">Get now free 50% discount for all products on your first order</p>
                            <div className="flex items-center">
                                <input type="email" placeholder="Your email address" className="p-2 border border-black rounded-l-md flex-grow" />
                                <button className="bg-[#8BAC3E] text-white px-4 py-2 rounded-r-md">SEND</button>
                            </div>
                            <div className="mt-4">
                                    <p className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#8BAC3E]">
                                        <path strokeLinecap="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                        <span>elemesid@gmail.com</span>
                                    </p>
                                    <p className="flex items-center space-x-2 mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#8BAC3E]">
                                        <path strokeLinecap="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>

                                        <span>0888 1111 2222</span>
                                    </p>
                    </div>
                    </div>
            </div>
            <div className="w-[136px] h-[40px] flex mt-20 ml-5">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8BAC3E] hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>     
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8BAC3E] hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8BAC3E] hover:text-white transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </div>
            </div>
        </div>
        <div className='flex items-center justify-center w-[1239px] h-[64px] rounded-[20px] mx-auto mt-10'>
            <h3  className='custom-footer-last'>© 2021 Elemes id. All rights reserved</h3>
        </div>
    </section>
  );
};

export default Footer;
