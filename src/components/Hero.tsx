"use client";

export default function Hero() {
  return (
    <header className="relative z-10 w-screen bg-gradient-to-r from-yellow-200 via-pink-100 to-blue-200 border-b-4 border-black overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute top-0 right-20 w-32 h-32 bg-pink-300 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute bottom-0 -right-10 w-48 h-48 bg-blue-400 rounded-full opacity-60 blur-3xl"></div>
      
      {/* Combined Navbar and Hero */}
      <div className="relative z-10 flex items-center justify-center px-6 md:px-12 lg:px-20 py-4">
        <div className="absolute left-6 md:left-12 lg:left-20 flex items-center gap-2">
          <img
            src="/esc.jpg"
            alt="ESC logo"
            className="w-10 h-10 object-cover border-[3px] border-black rounded-md"
          />
          <span className="font-bold text-lg tracking-tight"></span>
        </div>
        
        <h1 className="text-base md:text-lg lg:text-xl font-bold tracking-tight whitespace-nowrap">
          Break from the norm. Check if your idea stands out.
        </h1>
      </div>
    </header>
  );
}