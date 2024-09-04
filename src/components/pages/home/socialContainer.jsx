import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Dalana } from "./Dalana";

export function SocialContainer() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="felx flex-col justify-evenly items-center sm:flex md:flex md:grid-cols-1">
          <div>
            <Dalana />
          </div>
          <p>Moda Infantil. Diseños Personalizados. Revisa nuestro catálogo. etc.</p>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between w- ">
          <div></div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-blue-500"/>
            <Footer.Icon href={import.meta.env.VITE_INSTAGRAM} target="_blank" icon={BsInstagram} className="text-red-500"/>
            <Footer.Icon href={import.meta.env.VITE_WHATSAPP} icon={BsWhatsapp} target="_blank" className="text-green-500"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}