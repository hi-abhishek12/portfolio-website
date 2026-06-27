import React from "react";

function Navbar() {
  const navLinks = [
    { name: "Home" , id : 1},
    {
      name: "Blogs" ,
      id : 2,
      href : 'https://hashnode.com/@abhiblogsdev'
    },
    {
      name: "Skills" , id : 3,
    },
    {
      name: "Projects" ,id : 4,
    },
    {
      name: "Contact", id : 5,
    },
  ];
  return (
    <nav className="bg-transparent sticky top-0 z-50 rounded-b-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-extrabold tracking-tight text-blue-700 select-none">
            Portfolio
          </div>
          <div className="hidden md:flex gap-2">
            {navLinks.map((navItem) => (
              <a
                href={navItem.href}
                key={navItem.id}
                className="px-3 py-1.5 rounded-lg text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                {navItem.name}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-lg border border-gray-200 bg-white/70 hover:bg-blue-50 text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
