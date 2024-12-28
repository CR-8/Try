import logo from "../assets/logo.png";
import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Change from '../Pages/Change';
import Login from '../Pages/Loginpage';

const Navbar = () => {
    const Navitems = [
        { label: "Product", href: "/" },
        { label: "Features", href: "features" },
        { label: "Integrations", href: "integration" },
        { label: "Blog", href: 'bloglist' },
        { label: "Changelog", href: 'changelog' },
    ];

    return (
        <nav className="sticky top-0 z-40 py-3 backdrop-blur-lg bg-transparent">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center flex-shrink-0 px-12 py-2">
                    <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
                    <span className="text-[25px] text-white tracking-tight">Reflect</span>
                </div>

                {/* Navigation Items */}
                <div className="hidden text-[15px] lg:flex h-10 rounded-full border border-slate-500 bg-neutral-500/10 items-center">
                    <ul className="flex space-x-6 px-6 py-1 text-white">
                        {Navitems.map((item, index) => (
                            <li
                                key={index}
                                className="hover:text-slate-400 transition-all duration-300"
                            >
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Buttons Section */}
                <div className="hidden px-12 py-2 text-[19px] lg:flex items-center space-x-4">
                    <a
                        href="login"
                        className="py-2 px-3 text-white rounded-md hover:bg-slate-500/10"
                    >
                        Login
                    </a>
                    <a
                        href="sign-in"
                        className= "py-2 px-3 text-white rounded-md hover:bg-slate-500/10"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
