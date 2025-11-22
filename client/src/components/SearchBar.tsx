import React, { useState, useEffect, useRef } from 'react'
import type { Product } from '../types'

export default function SearchBar({ products = [], onSearch, onSelect, searchTerm: externalSearchTerm }: { products: Product[]; onSearch: (term: string) => void; onSelect: (p: Product) => void; searchTerm?: string }) {
  const [term, setTerm] = useState('')
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const ref = useRef<HTMLDivElement | null>(null)

  // Sync with external search term
  useEffect(() => {
    setTerm(externalSearchTerm || '')
  }, [externalSearchTerm])

  const handleClear = () => {
    setTerm('')
    setSuggestions([])
    onSearch('')
  }

  useEffect(() => {
    if (!term) return setSuggestions([])
    searchProducts(term)
  }, [term])

  function searchProducts(q: string) {
    // call provided handler as required by spec
    onSearch && onSearch(q)

    const lower = q.toLowerCase()
    const matches = products.filter((p) => p.name.toLowerCase().includes(lower)).slice(0, 5)
    setSuggestions(matches)
  }

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return
      if (!ref.current.contains(e.target as Node)) {
        setSuggestions([])
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div ref={ref} className="relative">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
        />
        {term && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Clear search"
          >
            <svg className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md overflow-hidden z-50">
          {suggestions.map((s) => (
            <li
              key={s.id}
              onClick={() => {
                setTerm(s.name)
                setSuggestions([])
                onSelect && onSelect(s)
              }}
              className="px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors"
            >
              <div className="text-sm font-medium text-gray-900 dark:text-white">{s.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">${s.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
