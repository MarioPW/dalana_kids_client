/*  TODO:
  - ADD FORM VALIDATION
  - ADD SPINNER
  - ADD ERROR HANDLING
*/
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react';
import { Alert } from 'flowbite-react';
import { CategoriesService } from '../../../../services/categories';
import { ProductServices } from '../../../../services/products';

export const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [res200, setRes200] = useState("");
  const [resError, setResError] = useState();
  const [loading, setLoading] = useState(false);

  const categoriesService = new CategoriesService();
  const productService = new ProductServices()
  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await categoriesService.getAllCategories();
        if (res.length > 0) {
          setCategories(res)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    getCategories();
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const images = e.target.images.files;
    const uploadedImageUrls = [];
    const url = await productService.getImgHost();
    setLoading(true);

    for (const image of images) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "images");

      const res = await fetch(url.data, {
        method: "POST",
        body: data
      });
      const imageUrl = await res.json();
      uploadedImageUrls.push(imageUrl.secure_url);
    }

    setLoading(false);
    const new_product = {
      name: formValues.name,
      price: parseFloat(formValues.price),
      stock: parseInt(formValues.stock),
      brand: formValues.brand,
      description: formValues.description,
      category_name: formValues.category_name,
      images: uploadedImageUrls,
      size: formValues.size,
    }
    try {
      const response = await productService.createProduct(new_product)
      
      console.log(response.data)
      setRes200(JSON.stringify(response.data))
    } catch (error) {
      if (error) {
        setResError(JSON.stringify(error.response))
        console.log(error)
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} >
      {res200 && <Alert color="success"><span className="font-medium">Ok! </span>{res200}</Alert>}
      {resError && <Alert color="failure"><span className="font-medium">Ups! </span>: {resError}
      </Alert>}
      <div className="p-8 mt-8 space-y-12">
        <div>
          <div className='items-center block h-12 border-b-2 sm:flex '>
            <h2 className="leading-7 text-2x2 font-semibold text-purple-600">Formulario para agregar nuevos productos.</h2>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="name" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Nombre del producto
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Nombre de 2 a 4 palabras (aprox)"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="price" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Precio
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="username"
                  onChange={handleInputChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="stock" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Cantidad Disponible
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                <input
                  type="stock"
                  name="stock"
                  id="stock"
                  autoComplete="username"
                  onChange={handleInputChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>
          </div>
          <div className='block gap-8 sm:flex'>
            <div className="sm:col-span-4">
              <label htmlFor="brand" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
                Marca
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    autoComplete="username"
                    placeholder='Una o dos palabras'
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="size" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
                Talla
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="size"
                    id="size"
                    autoComplete="username"
                    placeholder='s, m, l, xl, xxl, xxxl'
                    onChange={handleInputChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="description" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Descripción:
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                placeholder='Breve y llamativa descripción del producto; es bueno usar palabras como "hermos@", "espectacular", "super tierno", etc..'
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                required
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="category" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Categoría
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <select
                  name="category_name"
                  id="category"
                  value={categories[0]}
                  onChange={handleInputChange}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label className="block pt-4 text-sm font-medium leading-6 text-gray-900">
              Imágenes <span className='italic text-gray-500'>(Recomendado: 3 a 6 imágenes; se deben seleccionar todas al tiempo y ahí si cargarlas mientras...)</span>
            </label>
            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
              <div className="text-center">
                <PhotoIcon className="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="images"
                    className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Cargar o Arrasrar Imagen</span>
                    <input id="images" name="images" type="file" className="sr-only" accept="image/*" multiple />
                  </label>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
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
