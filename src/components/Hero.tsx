"use client";

export default function Hero() {
  return (
    <header className="relative z-10 w-screen bg-white border-b-4 border-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/esc.jpg"
            alt="ESC logo"
            className="w-10 h-10 object-cover border-[3px] border-black rounded-md"
          />
          <span className="font-bold text-lg tracking-tight"></span>
        </div>

        {/* Optional future nav links */}
        {/* <div className="hidden md:flex gap-4 text-base font-medium">
          <a href="#" className="hover:underline">Checklist</a>
          <a href="#" className="hover:underline">About</a>
        </div> */}
      </nav>

      {/* Hero section */}
      {/* <section className="flex flex-col items-center justify-center text-center py-20 px-6 md:px-12 lg:px-20 space-y-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl">
          Break from the norm.<br />
          <span className="underline decoration-3 decoration-black underline-offset-4">
            Check if your idea stands out.
          </span>
        </h1>
        <p className="text-base md:text-lg font-medium text-gray-700">
          Evaluate. Innovate. Stand Out.
        </p>
      </section> */}
    </header>
  );
}
