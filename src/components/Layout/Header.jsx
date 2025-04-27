import Link from "next/link";  // Mengimpor komponen Link dari Next.js untuk navigasi halaman
import Image from "next/image";
import Button from "../ui/Button";

const Header = () => {

    // Array menuItems berisi daftar menu yang akan ditampilkan di navbar
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
            id: 5,
            text: "Contact Us",
            url: "/contact",
        }
    ]


    return (
        <nav className="navbar">
            <div className="navbar__logo-container">
                <Image
                    src="/logo.png" 
                    alt="Elemes Logo"
                    width={300}
                    height={100}
                    quality={100}
                    className="navbar__logo" />
            </div>

            {/* Menu Items */}
            <div className="navbar__menu-container">
                <span className="navbar__hot-label">Hot</span>
                {
                    menuItems.map((item, key) => (
                        <Link key={key} className="navbar__menu-item" href={item.url}>
                            {item.text}
                        </Link>
                    ))
                }
            </div>

            <div className="w-[147px] h-[42px] ml-40 flex justify-center items-center rounded-full pt-[10px] pr-[18px] pb-[10px] pl-[18px] sm:flex sm:gap-[24px] sm:items-center sm:space-x-4 sm:w-[300px] sm:h-[42px]  sm:top-[25px] sm:mr-[100px]">
                <button className="hidden sm:flex sm:w-[44px] sm:h-[22px] font-bold">Masuk</button>
                <Button className="bg-[#8BAC3E]">
                    <span className="text-custom">Daftar Sekarang</span>
                </Button>
            </div>
        </nav>
    )
}


export default Header;