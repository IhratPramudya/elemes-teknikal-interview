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
        <nav className="flex justify-between items-center p-4 bg-white shadow-md max-w-[1440px] max-h-[96px]">

            <div className="flex items-center space-x-2">
                <Image
                    src="/logo.png" 
                    alt="Elemes Logo"
                    width={300}
                    height={100}
                    quality={100}
                    className="w-[207px] h-[50px] absolute top-[19px] left-[116px] " />
            </div>

            <div className="flex ml-70 gap-[32px]">
                <span className="absolute w-[36px] h-[19px] top-[22px] left-[723px] rounded-[8px] bg-[#E7462D] flex items-center justify-center">Hot</span>
                {
                    menuItems.map((item, key) => (
                        <Link className="text-gray-600 hover:text-blue-600" key={item.id} href={item.url}>
                            {item.text}
                        </Link>
                    ))
                }
            </div>

            <div className="flex gap-[24px] items-center space-x-4 w-[300px] h-[42px]  top-[25px]">
                <button className="w-[44px] h-[22px]">Masuk</button>
                <Button className="bg-[#8BAC3E]">
                    <span className="text-custom">Daftar Sekarang</span>
                </Button>
            </div>
        </nav>
    )
}


export default Header;