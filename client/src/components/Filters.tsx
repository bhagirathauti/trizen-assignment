import type { Product } from '../types'

export default function Filters({ products, selectedCategory, onSelectCategory }: { products: Product[]; selectedCategory: string | null; onSelectCategory: (c: string | null) => void }) {
  const categories = Array.from(new Set(products.map((p) => p.category))).filter(Boolean)

  return (
    <aside className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm sticky top-24">
      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 pb-3">Filters</h3>
        <div className="space-y-3">
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-all font-medium ${
              selectedCategory === null
                ? 'bg-black dark:bg-white text-white dark:text-black font-medium'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            All Products
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => onSelectCategory(c)}
              className={`w-full text-left px-4 py-3 text-sm rounded-lg transition-all capitalize font-medium ${
                selectedCategory === c
                  ? 'bg-black dark:bg-white text-white dark:text-black font-medium'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
