import { useState } from 'react'
import type { Product } from '../types'

export default function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false)

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>)
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="relative inline-block">
          <span className="text-gray-300 dark:text-gray-600">★</span>
          <span className="absolute left-0 top-0 overflow-hidden text-yellow-500" style={{ width: '50%' }}>★</span>
        </span>
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300 dark:text-gray-600">★</span>)
    }

    return stars
  }

  return (
    <div className="group cursor-pointer bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900">
        <div className="aspect-[4/3] w-full">
          {!imageError && product.image ? (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
              <svg className="w-20 h-20 text-gray-400 dark:text-gray-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">No Image Available</p>
            </div>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <button className="p-2 bg-white dark:bg-gray-900 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{product.name}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">{product.category}</p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <p className="text-base font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-1">
            <div className="flex text-sm">
              {renderStars(product.rating)}
            </div>
            <span className="text-gray-400 text-xs font-medium">({product.rating})</span>
          </div>
        </div>
        <button 
          className="w-full bg-black dark:bg-white text-white dark:text-black py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-all transform hover:scale-105"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
