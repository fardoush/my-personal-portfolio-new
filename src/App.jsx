import './App.css'

function App() {


  return (
    <>
       <div className="relative flex flex-col items-center mb-10 md:mb-16 lg:mb-32 text-center">
          <span className="absolute -top-12 md:-top-20 text-[54px] md:text-[120px] lg:text-[150px] font-black text-gray-500/5 dark:text-white/5 select-none tracking-tighter">
            EXPERTISE
          </span>

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-[2px] w-8 md:w-12 bg-indigo-500 rounded-full"></span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px]">
                Technical Arsenal
              </span>
              <span className="h-[2px] w-8 md:w-12 bg-indigo-500 rounded-full"></span>
            </div>

            <h3 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
              Tech{" "}
              <span className="relative inline-block">
                Stack
                <svg className="absolute -bottom-2 left-0 w-full h-3 md:h-5 text-indigo-500/40" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C40.5 2.16667 120 -1.5 199 6.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-indigo-500">.</span>
            </h3>

            <p className="mt-8 text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium tracking-wide max-w-sm mx-auto italic leading-relaxed">
              "Crafting high-performance web applications with the latest technologies."
            </p>
          </div>
        </div>
         {/* <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border-2 border-indigo-500 flex items-center justify-center text-white font-black text-xs sm:text-sm bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:rotate-12 transition-all duration-300">
                JF
              </div> */}
    </>
  )
}

export default App
