// "use client";
// import { Button } from "../components/ui/Button";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { useState } from "react";
// import Image from "next/image";
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-2 sm:py-6 bg-black backdrop-blur supports-[backdrop-filter]:bg-black/60">
//       <div className="w-full  flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="rounded flex items-center justify-center overflow-hidden">
//             <Image
//               src="/hwaklogo.png"
//               alt="Hawk Logo"
//               width={96} // 24 * 4 = 96px
//               height={96}
//               className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
//             />
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-2 border border-border/50">
//           <Button
//             variant="ghost"
//             className="!rounded-full bg-[#1E88E5] text-primary-foreground hover:bg-primary/90 px-4 lg:px-6"
//           >
//             Home
//           </Button>
//           <Button
//             variant="ghost"
//             className="rounded-full text-foreground hover:bg-secondary px-4 lg:px-6"
//           >
//             About
//           </Button>
//           <Button
//             variant="ghost"
//             className="rounded-full text-foreground hover:bg-secondary px-3 lg:px-4 gap-1"
//           >
//             Services <ChevronDown className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="ghost"
//             className="rounded-full text-foreground hover:bg-secondary px-4 lg:px-6"
//           >
//             Portfolio
//           </Button>
//           <Button
//             variant="ghost"
//             className="rounded-full text-foreground hover:bg-secondary px-3 lg:px-4 gap-1"
//           >
//             Case Studies <ChevronDown className="h-4 w-4" />
//           </Button>
//           <Button
//             variant="ghost"
//             className="rounded-full text-foreground hover:bg-secondary px-4 lg:px-6"
//           >
//             Pricing
//           </Button>
//           <Button
//             variant="ghost"
//             className="rounded-full text-foreground hover:bg-secondary px-4 lg:px-6"
//           >
//             Contact
//           </Button>
//         </nav>

//         {/* Desktop CTA Button */}
//         <Button className="hidden !xs:hidden !sm:hidden lg:flex !rounded-full gradient-blue text-white bg-[#1E88E5] font-semibold px-4 lg:px-6 py-4 lg:py-6 hover:opacity-90 transition-opacity">
//           Start Your Empire Today
//         </Button>

//         {/* Mobile Menu Button */}
//         <Button
//           variant="ghost"
//           className="lg:hidden !rounded-full p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? (
//             <X className="h-6 w-6" />
//           ) : (
//             <Menu className="h-6 w-6" />
//           )}
//         </Button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg">
//           <div className="px-4 py-6 space-y-2">
//             <Button
//               variant="ghost"
//               className="w-full justify-start !rounded-lg bg-[#1E88E5] text-primary-foreground hover:bg-primary/90 py-4"
//             >
//               Home
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start !rounded-lg text-foreground hover:bg-secondary py-4"
//             >
//               About
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start !rounded-lg text-foreground hover:bg-secondary py-4"
//             >
//               <span>Services</span>
//               <ChevronDown className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start !rounded-lg text-foreground hover:bg-secondary py-4"
//             >
//               Portfolio
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start !rounded-lg text-foreground hover:bg-secondary py-4"
//             >
//               <span>Case Studies</span>
//               <ChevronDown className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start !rounded-lg text-foreground hover:bg-secondary py-4"
//             >
//               Pricing
//             </Button>
//             <Button
//               variant="ghost"
//               className="w-full justify-start !rounded-lg text-foreground hover:bg-secondary py-4"
//             >
//               Contact
//             </Button>
//             <Button className="w-full !rounded-lg gradient-blue text-white bg-[#1E88E5] font-semibold py-4 hover:opacity-90 transition-opacity mt-4">
//               Start Your Empire Today
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import Image from "next/image";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const servicesItems = [
    "Web Development",
    "Mobile Apps",
    "Digital Marketing",
    "SEO Services",
    "Branding",
  ];
  const caseStudiesItems = [
    "E-commerce",
    "SaaS Products",
    "Corporate Websites",
    "Startups",
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);
  return (
    <div className=" bg-black fbjb">
      <header className="bg-black  ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-white">
                <Image
                  src="/hwaklogo.png"
                  alt="Hawk Logo"
                  width={300}
                  height={300}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                />
              </div>
            </div>

            <nav className="hidden lg:block">
              <div className="border border-gray-700 rounded-full px-2 py-2 bg-black/50 backdrop-blur-sm">
                <ul className="flex items-center gap-1">
                  <li>
                    <a
                      href="#home"
                      className="block px-5 py-2 rounded-full font-medium bg-[#1E88E5] text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="block px-5 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li className="relative" ref={dropdownRef}>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === "services" ? null : "services"
                        )
                      }
                      className="flex items-center gap-1 px-5 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                      Services
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === "services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === "services" && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
                        <ul className="py-2">
                          {servicesItems.map((item, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveDropdown(null);
                                }}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="block px-5 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="relative">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === "case-studies"
                            ? null
                            : "case-studies"
                        )
                      }
                      className="flex items-center gap-1 px-5 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                      Case Studies
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === "case-studies" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === "case-studies" && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50">
                        <ul className="py-2">
                          {caseStudiesItems.map((item, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveDropdown(null);
                                }}
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="block px-5 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="block px-5 py-2 rounded-full font-medium text-white hover:bg-gray-800 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <button className="hidden lg:block bg-[#1E88E5] text-white px-6 py-3 rounded-full font-medium transition-colors">
              Start Your Empire Today
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-900 border-t border-gray-800">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="block px-4 py-3 rounded-lg  bg-[#1E88E5] text-white font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="block px-4 py-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "services" ? null : "services"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "services" && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {servicesItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="block px-4 py-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "case-studies" ? null : "case-studies"
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                  >
                    Case Studies
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === "case-studies" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === "case-studies" && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {caseStudiesItems.map((item, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="block px-4 py-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block px-4 py-3 rounded-lg text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
                <li className="pt-2">
                  <button className="w-full bg-[#1E88E5] text-white px-6 py-3 rounded-full font-medium transition-colors">
                    Start Your Empire Today
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
