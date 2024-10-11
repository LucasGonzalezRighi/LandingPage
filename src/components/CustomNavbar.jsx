// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// import { useState } from "react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

// export default function CustomNavbar() {
//   const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

//   return (
//     <header className="w-full bg-gray-900 text-white shadow-md fixed top-0 z-50">
//       <Navbar className="container mx-auto justify-between items-center py-4 px-4">
//         {/* Logo */}
//         <NavbarBrand className="flex items-center">
//           <AcmeLogo className="h-8 w-8 mr-2" />
//           <span className="font-bold text-xl tracking-wide text-green-500">ACME</span>
//         </NavbarBrand>

//         {/* Menu Items (desktop) */}
//         <NavbarContent className="hidden sm:flex space-x-16 justify-center">
//           <NavbarItem>
//             <Link color="foreground" href="#" className="hover:text-yellow-400 transition duration-300">
//               Inicio
//             </Link>
//           </NavbarItem>
//           <NavbarItem isActive>
//             <Link href="#" aria-current="page" className="hover:text-yellow-400 transition duration-300">
//               Servicios
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link color="foreground" href="#" className="hover:text-yellow-400 transition duration-300">
//               Sobre Nosotros 
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link color="foreground" href="#" className="hover:text-yellow-400 transition duration-300">
//               Contactanos 
//             </Link>
//           </NavbarItem>
//         </NavbarContent>

//         {/* Action Buttons (desktop) */}
//         <NavbarContent justify="end" className="hidden lg:flex space-x-4">
//           <NavbarItem>
//             <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
//               Login
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Button className="rounded-full bg-yellow-400 text-gray-900 px-4 py-2 hover:bg-yellow-500 transition duration-300">
//               Sign Up
//             </Button>
//           </NavbarItem>
//         </NavbarContent>

//         {/* Mobile Menu Button */}
//         <button
//           className="sm:hidden flex items-center focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//             ></path>
//           </svg>
//         </button>
//       </Navbar>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="sm:hidden bg-gray-900 shadow-md py-4 px-6">
//           <NavbarItem>
//             <Link href="#" className="block py-2 text-gray-300 hover:text-yellow-400 transition duration-300">
//             Inicio
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link href="#" className="block py-2 text-gray-300 hover:text-yellow-400 transition duration-300">
//             Servicios
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link href="#" className="block py-2 text-gray-300 hover:text-yellow-400 transition duration-300">
//               Sobre Nosotros
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link href="#" className="block py-2 text-gray-300 hover:text-yellow-400 transition duration-300">
//               Login
//             </Link>
//           </NavbarItem>
//           <Button className="block bg-yellow-400 text-gray-900 px-4 py-2 mt-2 rounded-full hover:bg-yellow-500 transition duration-300">
//             Sign Up
//           </Button>
//         </div>
//       )}
//     </header>
//   );
// }
import React, { useState } from 'react';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <header className="w-full bg-black text-white shadow-md fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <a href="/" className="text-xl font-bold">OLD FITNESS</a>
        
        <div className="hidden md:flex space-x-6">
          {['INICIO', 'SERVICIOS', 'PORTFOLIO', 'ACERCA DE', 'EQUIPO', 'CONTACTO'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black shadow-md py-4 px-6">
          {['INICIO', 'SERVICIOS', 'PORTFOLIO', 'ACERCA DE', 'EQUIPO', 'CONTACTO'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-300 hover:text-gray-400 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default CustomNavbar;
