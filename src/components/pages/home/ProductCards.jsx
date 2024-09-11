import { useEffect, useState } from "react";
import { ProductServices } from "../../../services/products";

export function ProductCards() {
  const productServices = new ProductServices()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await productServices.getAllProducts();
        if (res.data) {
          setProducts(res.data)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProducts();
  }, [])

  return (
    <div className="block sm:grid p-4 grid-cols-2 sm:gap-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map(product => (
        <div
          className="max-w-sm object-cover w-full h-full p-2 border rounded-md shadow-md"
          key={product.id}
        >
          <div className="w-full h-72 overflow-hidden flex items-center bg-gray-200">
            <img
              src={product.images[0]["url"]}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-1">
            <h5 className="text-xl tracking-tight text-purple-900 dark:text-white">
              {product.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              $ {product.price}
            </p>
            <p className="font-normal text-red-700 dark:text-gray-400">
              Marca: {product.brand}
            </p>
          </div>
        </div>
      )
      )}
    </div>
  );
}


