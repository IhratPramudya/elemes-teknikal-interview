import { StarIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import Image from "next/image";

// components/Hero.js
const Hero = () => {
    return (
      <section 
        className="hero-background sm:flex sm:justify-center sm:items-center" >
        <div className="grid grid-cols-1 gap-1 sm:grid sm:grid-cols-2 sm:gap-4">        
          <div className="sm:absolute sm:top-[182.49px] sm:left-[120px] sm:gap-[32px] sm:w-[482px]">
            <h1 className="heading__style ml-6 md:ml-0 font-rubik sm:font-rubik">Good Food Us Good Mood</h1>
            <h2 className="absolute top-[500] left-6 w-[340px] md:left-1 sm:w-full sm:absolute sm:top-32 sm:font-rubik sm:font-normal sm:text-[18px] sm:leading-[29px] sm:tracking-[0%]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</h2>
            <div className="absolute top-[620px] left-6 md:left-0 md:top-[200px] flex justify-items-start items-center gap-7 mt-10 sm:flex sm:justify-items-start sm:items-center sm:gap-7 sm:mt-10">
              <Button className="bg-[#8BAC3E] text-custom w-[147px]">Daftar Sekarang</Button>
              <Button className="bg-[#F2F2F2] w-[98px] text-black flex items-center text-[14px] leading-[22px] tracking-[0%] font-medium font-rubik">About Us</Button>
            </div>
          </div>  
          <div className="w-[230.85px] h-[255.31px] absolute top-[230.74px] left-[50.34px] sm:w-[651px] sm:h-[663.62px] sm:absolute sm:top-[37px] sm:left-[701px]">
            <div>
              <Image width={100} height={100} quality={100} src="/images/hero-image.png" className="w-[198.58px] h-[199.46px] object-cover rounded-full border-[10px] border-[rgba(196,196,196,0.1)] sm:w-[412.9px] sm:h-[414.75px] sm:my-25 sm:mx-auto sm:object-cover sm:rounded-full sm:border-[50px] sm:border-[rgba(196,196,196,0.1)]" />
            </div>
            <div className="w-[200px] h-[70px] relative top-[-50px] left-[100] bg-[#FFFFFFBD] flex justify-center items-center rounded-[8px] gap-4 shadow-2xl sm:w-[292px] sm:h-[93px] sm:relative sm:top-[-200px] sm:bg-[#FFFFFFBD] sm:flex sm:justify-center sm:items-center sm:rounded-[8px] sm:gap-4 sm:shadow-2xl">
                <Image width={100} height={100} quality={100} src="/images/hero-image.png" className="w-[53px] h-[53px] object-cover rounded-full" />
                <div className="space-x-1 sm:space-x-4">
                  <h3 className="text-sm">Green Salad Tomato</h3>
                  <p className="text-[7px] leading-[14px] tracking-[0%] font-normal text-[#757575] font-openSans">Tomato</p>
                  <div className="sw-[30.3px] h-[5.66px] flex items-center gap-1 sm:w-[69.3px] sm:h-[10.66px] sm:flex sm:items-center sm:gap-2 sm:mt-2">
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