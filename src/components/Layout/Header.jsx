import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const Header = () => {

    const menuItems = [
        {
            id: 1,
            text: "Home",
            url: "/",
        },
        {
            id: 2,
            text: "About",
            url: "/users",
        },
        {
            id: 3,
            text: "Promotions",
            url: "/promotions",
        },
        {
            id: 4,
            text: "Blogs",
            url: "/blogs",
        },
        {
            id: 4,
            text: "Contact Us",
            url: "/contact",
        }
    ]


    return (
        <nav className="w-full h-[89px] flex justify-center items-center  sm:flex sm:justify-between sm:items-center sm:p-4 bg-white shadow-md sm:w-[1440px] sm:h-[96px]">

            <div className="flex items-center space-x-2">
                <Image
                    src="/logo.png" 
                    alt="Elemes Logo"
                    width={300}
                    height={100}
                    quality={100}
                    className="w-[150px] h-[36px] absolute top-[25px] left-[33px] sm:w-[207px] sm:h-[50px] sm:absolute sm:top-[19px] sm:left-[116px]" />
            </div>

            <div className="hidden sm:flex sm:ml-70 sm:gap-[32px]">
                <span className="absolute w-[36px] h-[19px] top-[22px] left-[723px] rounded-[8px] bg-[#E7462D] flex items-center justify-center">Hot</span>
                {
                    menuItems.map((item, key) => (
                        <Link className="text-gray-600 hover:text-blue-600" key={item.id} href={item.url}>
                            {item.text}
                        </Link>
                    ))
                }
            </div>

            <div className="w-[147px] h-[42px] ml-40 text-custom-sm flex justify-center items-center rounded-full pt-[10px] pr-[18px] pb-[10px] pl-[18px] sm:flex sm:gap-[24px] sm:items-center sm:space-x-4 sm:w-[300px] sm:h-[42px]  sm:top-[25px] sm:mr-[100px]">
                <button className="hidden sm:flex sm:w-[44px] sm:h-[22px]">Masuk</button>
                <Button className="bg-[#8BAC3E]">
                    <span className="text-custom">Daftar Sekarang</span>
                </Button>
            </div>
        </nav>
    )
}


export default Header;