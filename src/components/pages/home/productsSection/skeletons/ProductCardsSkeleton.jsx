import React from 'react'

export const ProductCardsSkeleton = ({amount}) => {
    const skeletonArray = Array(amount).fill(null)
  return (
    skeletonArray.map((_, index) => (
        <div key={index} className="object-cover w-full h-full p-2 border rounded-md shadow-md">
          <div className="flex items-center w-full overflow-hidden bg-gray-200 h-72 animate-pulse">
          <div className="object-cover h-full w-60"/>
          </div>
          <div className="mt-1">
            <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-2/4 h-4 mt-2 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-3/4 h-4 mt-2 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ))
  )
}
