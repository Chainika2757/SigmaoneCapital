import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ linkClass = "text-gray-500 hover:text-blue-900", onClick }) => {
    return (
        <>
            <HashLink className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${linkClass}`} smooth to="/#hero" onClick={onClick}>
                Home
            </HashLink>
            <HashLink className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${linkClass}`} smooth to="/#about" onClick={onClick}>
                About
            </HashLink>
            <Link className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${linkClass}`} to="/services" onClick={onClick}>
                Services
            </Link>
            <Link className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${linkClass}`} to="/trading-solutions" onClick={onClick}>
                Trading Solutions
            </Link>
            <Link className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${linkClass}`} to="/kyc" onClick={onClick}>
                KYC
            </Link>
            <Link className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${linkClass}`} to="/complaint-status" onClick={onClick}>
                Complaint Status
            </Link>
            <Link className={`px-3 xl:px-4 text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${linkClass}`} to="/contact" onClick={onClick}>
                Contact Us
            </Link>
        </>
    )
}

export default NavLinks;


