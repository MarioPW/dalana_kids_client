import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export const MyFooter = () => {
  return (
    <Footer container className='bg-yellow-300'>
      <div className="w-full ">
        <div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="src\assets\dalanaKidsLogo.png"
              alt="Dalana Kids Logo"
              name="Dalana Kids"
              className='text-white'
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div >
              <Footer.Title className='text-white' title="Nosotros" />
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Síguenos" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-white'/>
              <Footer.LinkGroup col className='text-white'>
                <Footer.Link href="#">Políticas de Privacidad</Footer.Link>
                <Footer.Link href="#">Términos &amp; Condiciones</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="flex mt-4 space-x-6 sm:mt-0 sm:justify-center " >
            <Footer.Icon href="#" icon={BsFacebook} className='text-white'/>
            <Footer.Icon href="#" icon={BsInstagram} className='text-white'/>
            <Footer.Icon href="#" icon={BsTwitter} className='text-white'/>
            <Footer.Icon href="#" icon={BsGithub} className='text-white'/>
            <Footer.Icon href="#" icon={BsDribbble} className='text-white'/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
