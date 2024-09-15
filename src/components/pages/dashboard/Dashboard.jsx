import { ProductForm } from './products/ProductForm';
import { ListOfProducts } from './products/ListOfProducts';
import { CategoryForm } from './categories/CategoryForm';
import { useState } from 'react'
import { CarouselForm } from './carousel/CarouselForm';

export const Dashboard = () => {
  const [isOpenNewProduct, setIsOpenNewProduct] = useState(false);
  const [isOpenListOfProducts, setIsOpenListOfProducts] = useState(false);
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenCarousel, setIsOpenCarousel] = useState(false);

  return (
    <div className="block w-full mt-12 sm:text-left sm:w-5/6">
      <div>
        <button 
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        onClick={() => setIsOpenNewProduct(!isOpenNewProduct)}>
        Nuevo Producto
          <svg className="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/*<!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
      -->*/}
      <div className="right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
       {isOpenNewProduct && <ProductForm />}
      </div>

      <div>
        <button 
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        onClick={() => setIsOpenListOfProducts(!isOpenListOfProducts)}>
        Lista de Productos
          <svg className="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/*<!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
      -->*/}
      <div className="right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
       {isOpenListOfProducts && <ListOfProducts />}
      </div>

      <div>
        <button 
        type="button"
        className="inline-flex w-full justify-center  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        onClick={() => setIsOpenCategories(!isOpenCategories)}>
        Categorías
          <svg className="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/*<!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
      -->*/}
      <div className="right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
       {isOpenCategories && <CategoryForm />}
      </div>

      <div>
        <button 
        type="button"
        className="inline-flex w-full justify-center  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="menu-button"
        onClick={() => setIsOpenCarousel(!isOpenCarousel)}>
        Carrusel
          <svg className="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/*<!--
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
      -->*/}
      <div className="right-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
       {isOpenCarousel && <CarouselForm />}
      </div>
    </div>
  )
}
