import { useEffect, useState } from "react";
import { ProductServices } from "../../../services/products";
import { ProductRating } from "../../utilities/Rating";

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
    <div className="block grid-cols-2 p-4 sm:grid sm:gap-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map(product => (
        <div
          className="object-cover w-full h-full max-w-sm p-2 border rounded-md shadow-md"
          key={product.id}
        >
          <div className="flex items-center w-full overflow-hidden bg-gray-200 h-72">
            <img
              src={product.images[1]["url"]}
              alt={product.name}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="mt-1">
            <div>
              <h5 className="text-xl tracking-tight text-purple-900 dark:text-white">
                {product.name}
              </h5>
              <ProductRating />
            </div>

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
