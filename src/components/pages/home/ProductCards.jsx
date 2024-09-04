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
    <div className="block  sm:grid grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
      {products.map(product => (
        <div
          className="max-w-sm object-cover w-full h-full"
          key={product.id}
        >
          <div className="w-full h-72 overflow-hidden flex items-center justify-center bg-gray-200">
            <img
              src={product.images[0]["url"]}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-5 py-5">
            <h5 className="text-2xl tracking-tight text-purple-900 dark:text-white">
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


