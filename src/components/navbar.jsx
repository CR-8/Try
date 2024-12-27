import { colors } from '../constants/styles';
import logo from "../assets/logo.png";

const Navbar = () => {
    const navItems = [
        { label: "Product", href: "./Features1.jsx" },
        { label: "Pricing", href: "./Pricing.jsx" },
        { label: "Company", href: "#" },
        { label: "Blog", href: "./BlogList.jsx" },
        { label: "Changelog", href: "./Changelog.jsx" },
    ];

    return (
        <nav 
            className="sticky top-0 z-40 py-3 border-b" 
            style={{ backdropFilter: 'blur(12px)' }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0 px-12 py-2">
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="h-10 w-10 mr-2" 
                    />
                    <span 
                        className="text-[25px] tracking-tight"
                        style={{ color: colors.text.primary }}
                    >
                        Reflect
                    </span>
                </div>

                {/* Navigation Links */}
                <div 
                    className="hidden text-[15px] lg:flex h-10 rounded-full items-center"
                    style={{ 
                        border: `1px solid ${colors.border.secondary}`,
                        background: colors.background.overlay,
                    }}
                >
                    <ul className="flex space-x-6 px-6 py-1 text-white">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="hover:text-slate-400 transition-all duration-300"
                            >
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Auth Buttons */}
                <div className="hidden px-12 py-2 text-[19px] lg:flex items-center space-x-4">
                    <a
                        href="#"
                        className="py-2 px-3 text-white rounded-md hover:bg-slate-500/10"
                    >
                        Login
                    </a>
                    <a
                        href="#"
                        className="py-2 px-3 text-white rounded-md hover:bg-slate-500/10"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
