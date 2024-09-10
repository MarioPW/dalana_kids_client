import React from 'react'
import { useState } from 'react'

import { CategoriesService } from '../../../../services/categories'

export const CategoryForm = () => {
  const service = new CategoriesService()
  const [category, setCategory] = useState({})
  const [color, setColor] = useState({})

  const setters = {
    category: setCategory,
    color: setColor
  }
  const handleChange = (e) => {
    setters[e.target.id](e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: category,
      color: color
    }
    const response = await service.createCategory(data)
    response.status == 200 ? alert("Categoría creada") : alert(`${response}`)
  }
  return (
    <form onSubmit={handleSubmit} >

      <div className="p-8 mt-8 space-y-12">
        <div className='block sm:gap-2'>Crear Categoría de productos
          <div className="block sm:col-span-4">
            <label htmlFor="category-name" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Categoría
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="category-name"
                  id="category-name"
                  autoComplete="username"
                  placeholder='Una o dos palabras'
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="category-color" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Color
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="color"
                  id="category-color"
                  autoComplete="username"
                  placeholder='Una o dos palabras'
                  onChange={handleChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-6 gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
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
