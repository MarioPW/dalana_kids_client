import React from 'react'
import { Button, Carousel } from "flowbite-react";
import { Link } from "react-router-dom";


export const ProductDescription = ({ product }) => {
    return (

        <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {/* Carousel */}
            <div className="h-64 overflow-hidden rounded-lg sm:h-80 xl:h-[28rem]">
                <Carousel slide={false}>
                    {product.images.map((image) => (
                        <img
                            key={image.id}
                            src={image.url}
                            alt={product.name}
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                    ))}
                </Carousel>
            </div>
            {/* Product Details */}
            <section className="flex flex-col space-y-4">
                <h2 className="text-3xl text-green-500 dark:text-white" style={{ fontFamily: "Luckiest Guy" }}>
                    {product.name}
                </h2>
                <p className="text-gray-700 text-md dark:text-gray-300">
                    {product.description}
                </p>
                <p className="text-2xl font-semibold text-indigo-600">
                    ${product.price}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stock disponible: {product.stock}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Marca: {product.brand}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Categoría: {product.category_name}
                </p>
                <div className='flex justify-between' >
                    <Button color="dark" className='px-4 py-2 font-bold text-white bg-orange-500 border-2 border-orange-500 rounded hover:bg-red-500 hover:border-red-500 ' onClick={() => console.log('clicked')}>Comprar</Button>
                    <Link className='px-4 py-2 font-bold text-white bg-orange-500 border-2 border-orange-500 rounded hover:bg-red-500 hover:border-red-500 ' to={`/`}>Volver</Link>
                </div>

            </section>
        </div>
    )
}
