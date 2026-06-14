import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ linkClass = "text-gray-500 hover:text-blue-900" }) => {
    return (
        <>
            <HashLink className={`px-4 font-extrabold transition-colors duration-300 ${linkClass}`} smooth to="/#about">
                About
            </HashLink>
            <HashLink className={`px-4 font-extrabold transition-colors duration-300 ${linkClass}`} smooth to="/#services">
                Services
            </HashLink>
            <HashLink className={`px-4 font-extrabold transition-colors duration-300 ${linkClass}`} to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
