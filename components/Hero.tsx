import Image from "next/image";
import { FC } from "react";
import { Herodata } from "../utils/HeroData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'; 

const Hero: FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500
      };
  return (
    <div className="">
      <Carousel
      animationHandler="fade"
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      interval={5000}
      autoPlay
      className="w-[1440px] overflow-x-hidden h-[100vh] object-cover "
       >
      {Herodata.map((item, i) => {
               return <div className="">
                    <Image src={item.image} layout='intrinsic' objectFit="cover" alt='' />
                </div>
})}
      </Carousel>
    </div>
  )
}

export default Hero