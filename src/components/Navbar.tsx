import Logo from '../assets/logo-text.png'

const Navbar = () => {
    return (
        <div className=' border-b border-gray-200 py-[20px]'>
            <div className='container mx-auto flex justify-between items-center'>
                
                {/* Logo */}
                <div>
                    <img src={Logo} alt="" />
                </div>

                {/* Menu */}
                <ul className='flex gap-6 text-gray-600 font-medium'>
                    <li className='text-[#E51E7E]'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* Button */}
                <div className='flex gap-5 items-center text-gray-600 font-medium'>
                    <button>Sign In</button>
                    <button className="bg-[#E51E7E] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#d0176e] transition-colors">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar