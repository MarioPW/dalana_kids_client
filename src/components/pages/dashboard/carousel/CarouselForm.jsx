import React, { useState } from 'react'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { ProductServices } from '../../../../services/products'
import { CarouselService } from '../../../../services/carousel'

export const CarouselForm = () => {
  const [formValues, setFormValues] = useState({})
    const productService = new ProductServices()
    const carouselService = new CarouselService()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const image = e.target.image.files[0]
            if (!image) {
                console.error("No se ha seleccionado ninguna imagen")
                return
            }
            const data = new FormData()
            const { data: url } = await productService.getImgHost()
            data.append("file", image)
            data.append("upload_preset", "images")
            const res = await fetch(url, {
                method: "POST",
                body: data
            })
            if (!res.ok) {
                throw new Error("Error al subir la imagen")
            }
            const imageUrl = await res.json()
            const carouselItemSchema = {
                slug,
                img_url: imageUrl.secure_url
            }
            const response = await carouselService.createCarouselItem(carouselItemSchema)
            console.log("Elemento de carrusel creado:", response.status === 200 ? "OK" : "FAIL")

        } catch (error) {
            console.error("Error al manejar el formulario:", error)
        }
    }
    const handleCancelButton = () => {
        document.querySelector('#carouselForm').reset()
        setFormValues({})
      }
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      }
    return (
        <form onSubmit={handleSubmit} id="carouselForm">
            <div className="p-8 mt-8 space-y-12">
            <h2>Formulario para manejo del carrusel</h2>

                <div className="sm:col-span-4">
                    <label htmlFor="slug" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
                        Frase de 3 a 10 palabras; ésta se ubicará en la parte inferior del carrusel
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                type="text"
                                name="slug"
                                id="slug"
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="Nombre de 2 a 4 palabras (aprox)"
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-full">
                    <label className="block pt-4 text-sm font-medium leading-6 text-gray-900">
                        Imágen <span className='italic text-gray-500'>(Seleccionar una imágen panorámica o de fondo; tomarla preferiblemente con el celu de lado ó fijarse que sea horizontal para que encaje bien en el carrusel.)</span>
                    </label>
                    <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                        <div className="text-center">
                            <PhotoIcon className="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
                            <div className="flex mt-4 text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="image"
                                    className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>Cargar o Arrasrar Imagen</span>
                                    <input id="image" name="image" type="file" className="sr-only" accept="image/*" />
                                </label>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end mt-6 gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={handleCancelButton}>
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Guardar</button>
                </div>
            </div>
        </form>
    )
}
