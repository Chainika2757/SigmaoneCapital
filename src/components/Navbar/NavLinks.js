import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ linkClass = "text-gray-500 hover:text-blue-900", onClick }) => {
    const location = useLocation();

    const getActiveStyle = (path, hash = "") => {
        const isCurrentPath = location.pathname === path;
        // If hash is specified, match it exactly. If not, match when hash is empty or #hero
        const isCurrentHash = hash 
            ? location.hash === hash 
            : (location.hash === "" || location.hash === "#hero" || location.hash === "#home");
        const isActive = isCurrentPath && isCurrentHash;
        
        if (!isActive) return "";
        
        const isTransparent = linkClass.includes('text-white');
        return isTransparent 
            ? "border-b-2 border-white pb-1 !text-white" 
            : "border-b-2 border-blue-900 pb-1 !text-blue-900";
    };

    return (
        <>
            <HashLink 
                className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-all duration-300 ${linkClass} ${getActiveStyle('/', '#hero')}`} 
                smooth to="/#hero" 
                onClick={onClick}
            >
                Home
            </HashLink>
            <HashLink 
                className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-all duration-300 ${linkClass} ${getActiveStyle('/', '#about')}`} 
                smooth to="/#about" 
                onClick={onClick}
            >
                About
            </HashLink>
            <Link 
                className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-all duration-300 ${linkClass} ${getActiveStyle('/services')}`} 
                to="/services" 
                onClick={onClick}
            >
                Services
            </Link>
            <Link 
                className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-all duration-300 ${linkClass} ${getActiveStyle('/trading-solutions')}`} 
                to="/trading-solutions" 
                onClick={onClick}
            >
                Trading Solutions
            </Link>
            <Link 
                className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-all duration-300 ${linkClass} ${getActiveStyle('/kyc')}`} 
                to="/kyc" 
                onClick={onClick}
            >
                KYC
            </Link>
            <Link 
                className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-all duration-300 ${linkClass} ${getActiveStyle('/complaint-status')}`} 
                to="/complaint-status" 
                onClick={onClick}
            >
                Complaint Status
            </Link>
            <Link 
                className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-all duration-300 ${linkClass} ${getActiveStyle('/contact')}`} 
                to="/contact" 
                onClick={onClick}
            >
                Contact Us
            </Link>
        </>
    )
}

export default NavLinks;



