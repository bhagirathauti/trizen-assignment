import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Filters from './components/Filters'
import ProductGrid from './components/ProductGrid'
import type { Product } from './types'
import './index.css'

function AppContent() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10

  useEffect(() => {
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/products')
        if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`)
        const data = await res.json()
        const normalized = (data as any[]).map((p) => ({ id: p.id ?? p._id ?? String(Math.random()), ...p }))
        setProducts(normalized.slice(0, 20))
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  function onSearch(term: string) {
    setSearchTerm(term)
  }

  function onSelect(product: Product) {
    setSearchTerm(product.name)
    setSelectedCategory(null)
  }

  const filtered = useMemo(() => {
    let list = products
    if (selectedCategory) list = list.filter((p) => p.category === selectedCategory)
    if (searchTerm) {
      const q = searchTerm.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q))
    }
    return list
  }, [products, searchTerm, selectedCategory])

  // Pagination calculations
  const totalPages = Math.ceil(filtered.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filtered.slice(startIndex, endIndex)

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  function clearSearch() {
    setSearchTerm('')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header products={products} onSearch={onSearch} onSelect={onSelect} searchTerm={searchTerm} clearSearch={clearSearch} />
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-5 mt-12">
          <div className="lg:col-span-1">
            <Filters products={products} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
          </div>
          <div className="lg:col-span-4">
            {searchTerm && !loading && !error && (
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Showing results for <span className="font-semibold text-gray-900 dark:text-white">"{searchTerm}"</span>
                    <span className="ml-2 text-gray-500 dark:text-gray-400">({filtered.length} {filtered.length === 1 ? 'product' : 'products'})</span>
                  </p>
                  <button
                    onClick={clearSearch}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                  >
                    Clear search
                  </button>
                </div>
              </div>
            )}
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg border border-red-200 dark:border-red-800">
                {error}
              </div>
            )}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-gray-600 dark:text-gray-400">Loading products...</div>
              </div>
            )}
            {!loading && !error && filtered.length === 0 && (
              <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                No products found
              </div>
            )}
            {!loading && !error && filtered.length > 0 && (
              <>
                <ProductGrid products={currentProducts} />
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-2">
                    <button
                      onClick={() => {
                        setCurrentPage(prev => Math.max(1, prev - 1));
                      }}
                      disabled={currentPage === 1}
                      className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                      aria-label="Previous page"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                            currentPage === page
                              ? 'bg-black dark:bg-white text-white dark:text-black shadow-md'
                              : 'border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => {
                        setCurrentPage(prev => Math.min(totalPages, prev + 1));
                      }}
                      disabled={currentPage === totalPages}
                      className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                      aria-label="Next page"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
