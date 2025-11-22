export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 relative">
      {/* Animated background icons */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
        {/* Shopping bag - Pink */}
        <div className="absolute top-10 left-10 animate-bounce-slow">
          <svg className="w-16 h-16 text-pink-700 dark:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        
        {/* Truck/Shipping - Green */}
        <div className="absolute top-1/4 right-20 animate-float">
          <svg className="w-20 h-20 text-green-700 dark:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        </div>
        
        {/* Gift/Package - Pink */}
        <div className="absolute top-1/3 left-1/4 animate-pulse-slow">
          <svg className="w-14 h-14 text-pink-700 dark:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
        
        {/* Shopping cart - Green */}
        <div className="absolute bottom-20 left-1/3 animate-float delay-150">
          <svg className="w-16 h-16 text-green-700 dark:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        
        {/* Tag/Price - Pink */}
        <div className="absolute bottom-24 right-1/4 animate-bounce-slow delay-100">
          <svg className="w-12 h-12 text-pink-700 dark:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        </div>
        
        {/* Credit card - Green */}
        <div className="absolute top-1/2 left-16 animate-pulse-slow delay-100">
          <svg className="w-14 h-14 text-green-700 dark:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        </div>
        
        {/* Star/Favorite - Pink */}
        <div className="absolute top-16 right-1/3 animate-float delay-200">
          <svg className="w-10 h-10 text-pink-700 dark:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        
        {/* Fast delivery - Green */}
        <div className="absolute bottom-10 right-16 animate-bounce-slow">
          <svg className="w-16 h-16 text-green-700 dark:text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        {/* Location/Tracking - Pink */}
        <div className="absolute top-2/3 right-1/2 animate-pulse-slow delay-200">
          <svg className="w-12 h-12 text-pink-700 dark:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>

      <div className="mx-auto px-8 sm:px-12 py-20 sm:py-24 relative z-10">
        <div className="max-w-2xl">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md mb-6 animate-fade-in">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Trending Now</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight leading-tight animate-slide-up">
            Discover Amazing Products
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed animate-slide-up delay-100">
            Explore our curated collection. Quality products for every need.
          </p>

          {/* Feature highlights with icons */}
          <div className="grid grid-cols-3 gap-4 mb-10 animate-slide-up delay-200">
            <div className="flex items-center gap-2 group">
              <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quality</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Fast Ship</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm group-hover:shadow-md transition-all group-hover:scale-110">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Secure</span>
            </div>
          </div>

          <button className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-0.5 animate-slide-up delay-300 inline-flex items-center gap-2">
            Shop Now
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
