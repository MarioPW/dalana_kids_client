
import { Carousel } from "flowbite-react";

export function MyCarousel() {
  return (
    <div className="h-56 sm:h-[600px] color-white">
      <Carousel leftControl="<" rightControl=">">
        <img src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
        <img src="https://images.pexels.com/photos/16322566/pexels-photo-16322566/free-photo-of-photo-of-a-smiling-baby-in-a-pink-outfit.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
        <img src="https://images.pexels.com/photos/5893864/pexels-photo-5893864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
        <img src="https://images.pexels.com/photos/2839335/pexels-photo-2839335.jpeg?auto=compress&cs=tinysrgb&w=600" alt="..." />
        <img src="https://images.pexels.com/photos/35188/child-childrens-baby-children-s.jpg?auto=compress&cs=tinysrgb&w=600" alt="..." />
      </Carousel>
    </div>
  );
}
