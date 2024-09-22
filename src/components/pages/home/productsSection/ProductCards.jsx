import { useEffect, useState } from "react";
import { ProductServices } from "../../../../services/products";
import { ProductRating } from "../../../utilities/Rating";
import { Link } from "react-router-dom";
import { ProductCardsSkeleton } from "./skeletons/ProductCardsSkeleton";
import { Badge } from "flowbite-react";


export function ProductCards() {
  const productServices = new ProductServices()
  const [products, setProducts] = useState()

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
    <div className="block grid-cols-2 py-4 ps-4 sm:grid sm:gap-2 lg:grid-cols-3 xl:grid-cols-4">
      {!products ? <ProductCardsSkeleton amount={12} /> : products.map(product => (
        <Link to={`/description/${product.id}`} key={product.id}>
          <div className="flex justify-between w-full h-full max-w-sm p-2 border-b-2 sm:flex-col sm:rounded-md sm:shadow-md sm:border">
            <div className="flex items-center h-32 overflow-hidden bg-gray-200 min-w-36 sm:w-full sm:h-72">
              <img
                src={product.images[0]["url"]}
                alt={product.name}
                className="object-cover w-full h-full"
                loading="lazy"
                style={{ viewTransitionName: `image-0` }}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow ms-3 sm:mt-1">
              <p className="text-2xl font-semibold text-indigo-600">
                $ {product.price}
              </p>
              <h4 className="text-lg tracking-tight text-purple-900 dark:text-white">
                {product.name}
              </h4>

              {/* <p className="font-normal text-red-700 dark:text-gray-400">
                Marca: {product.brand}
              </p> */}
              {/* <div className='flex flex-col gap-3 justify-ceter'>
                <p className="text-gray-600 text-md dark:text-gray-400">
                  Tallas Disponibles:
                </p>
                <p className="flex flex-wrap gap-1">
                  {product.sizes.map
                    (size => <Badge color="info" key={size.id}>{size.size.toUpperCase()}</Badge>)}</p>
              </div> */}
              <ProductRating />
            </div>
          </div></Link>
      ))}
    </div >
  );
}


