import { StarIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Image from "next/image";

// components/Hero.js
const Hero = () => {
    return (
      <section 
        className="hero-background flex justify-center items-center" >
        <div className="grid grid-cols-2 gap-4">        
          <div className="w-[482px] h-[286.92px] absolute top-[182.49px] left-[120px] gap-[32px]">
            <h1 className="heading-custom text-[#8BAC3E]">Good Food Us Good Mood</h1>
            <h3>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</h3>
            <div className="flex justify-items-start items-center gap-7 mt-10">
              <Button className="bg-[#8BAC3E] text-custom">Daftar Sekarang</Button>
              <Button className="bg-[#F2F2F2] w-[98px] text-black flex items-center text-[14px] leading-[22px] tracking-[0%] font-medium font-rubik">About Us</Button>
            </div>
          </div>
          <div className="w-[651px] h-[663.62px] absolute top-[37px] left-[701px]">
            <div>
              <Image width={100} height={100} quality={100} src="/images/hero-image.png" className="w-[412.9px] h-[414.75px] my-25 mx-auto object-cover rounded-full border-[50px] border-[rgba(196,196,196,0.1)]" />
            </div>
            <div className="w-[292px] h-[93px] relative top-[-200px] bg-[#FFFFFFBD] flex justify-center items-center rounded-[8px] gap-4 shadow-2xl">
                <Image width={100} height={100} quality={100} src="/images/hero-image.png" className="w-[53px] h-[53px] object-cover rounded-full" />
                <div className="space-x-4">
                  <h3>Green Salad Tomato</h3>
                  <p className="text-[12px] leading-[14px] tracking-[0%] font-normal text-[#757575] font-openSans">Tomato</p>
                  <div className="w-[69.3px] h-[10.66px] flex items-center gap-2 mt-2">
                    {
                          [...Array(4)].map((star, index) => (
                              <StarIcon key={index}/>
                          ))
                    }
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero; 