import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Logo from '../assets/logo-text.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className='border-b border-gray-200 py-[15px] sticky top-0 z-50 bg-gray-50 relative'>
            <div className='container mx-auto flex justify-between items-center px-4'>

                {/* Mobile Hamburger menu and Desktop logo */}
                <div className='flex items-center'>
                    <div 
                        onClick={handleToggleMenu} 
                        className='block md:hidden text-2xl cursor-pointer text-gray-700'
                    >
                        {isOpen ? <IoMdClose /> : <FiAlignJustify />}
                    </div>

                    <img
                        className='hidden md:block h-auto'
                        src={Logo}
                        alt="Website Logo"
                    />
                </div>

                {/* Mobile logo and Desktop main menu  */}
                <div className='flex justify-center items-center'>
                    <img
                        className='block md:hidden h-7'
                        src={Logo}
                        alt="Website Logo"
                    />

                    <ul className={`
                        absolute left-0 w-full bg-white border-b border-gray-200 shadow-md p-5 flex flex-col gap-4
                        md:static md:w-auto md:bg-transparent md:border-none md:shadow-none md:p-0 md:flex-row md:gap-6
                        text-gray-600 font-medium transition-all duration-300 ease-in-out
                        ${isOpen ? 'top-[65px] opacity-100 visible' : '-top-96 opacity-0 invisible md:opacity-100 md:visible md:top-auto'}
                    `}>
                        <li className='cursor-pointer hover:text-[#E51E7E]'>Home</li>
                        <li className='hover:text-[#E51E7E] cursor-pointer'>Technologies</li>
                        <li className='hover:text-[#E51E7E] cursor-pointer'>Projects</li>
                        <li className='hover:text-[#E51E7E] cursor-pointer'>About</li>
                        <li className='hover:text-[#E51E7E] cursor-pointer'>Contact</li>
                    </ul>
                </div>

                {/* Sign In, Sign Up  */}
                <div className='flex gap-2 sm:gap-4 items-center text-gray-600 font-medium z-10'>
                    <button className='text-sm sm:text-base hover:text-[#E51E7E]'>Sign In</button>
                    <button className="bg-[#E51E7E] text-white px-3 py-1.5 sm:px-6 sm:py-2.5 text-sm sm:text-base rounded-full font-medium hover:bg-[#d0176e] transition-colors">
                        Sign Up
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;