import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavLinks from '../Navbar/NavLinks';
import StockTicker from '../StockTicker';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';
    const isSolid = !isHome || !top;

    function handleClick() {
        setisOpen(!isOpen);
    }

    useEffect(() => {
      const scrollHandler = () => {
        const scrolled = window.scrollY > 10;
        setTop((prevTop) => {
          const isAtTop = !scrolled;
          return prevTop === isAtTop ? prevTop : isAtTop;
        });
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <nav 
            className={`fixed top-0 w-full z-[999] transition-all duration-300 ease-in-out ${isSolid ? 'bg-white shadow-lg' : 'bg-transparent'}`}
            style={{ transform: 'translate3d(0, 0, 100px)', zIndex: 999 }}
        >
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <HashLink smooth to="/#hero">
                        <img 
                            src="/assets/logo_hero.png"  
                            alt="Logo"
                            className="h-16 w-auto transition-all duration-300"
                            style={isSolid ? { filter: 'brightness(0)' } : {}}
                        />
                    </HashLink>
                </div>
                <div className="group flex flex-col items-center">
                    <button 
                        className={`p-2 rounded-lg lg:hidden transition-colors duration-300 ${isSolid ? 'text-blue-900' : 'text-white'}`} 
                        onClick={handleClick}
                    >
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            {isOpen && (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                            )}
                            {!isOpen && (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            )}
                        </svg>
                    </button>
                    <div className='hidden space-x-1 lg:inline-block p-5'>
                        <NavLinks linkClass={isSolid ? "text-gray-500 hover:text-blue-900" : "text-white hover:text-gray-200"} />
                    </div>

                    <div className={`absolute transition-all duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-b-xl py-6 px-4 bg-white lg:hidden shadow-xl top-full border-t border-gray-100 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                        <div className='flex flex-col space-y-4 text-center'>
                            <NavLinks linkClass="text-gray-600 hover:text-blue-900 py-1" />
                        </div>                                                
                    </div>

                </div>
            </div>
            <StockTicker />
        </nav>
    )
}

export default NavBar;
