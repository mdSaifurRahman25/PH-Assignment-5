import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className="border-t border-gray-200">
            <div className='container mx-auto md:grid md:grid-cols-12 my-15'>
                {/* left Logo Section */}
                <div className='md:col-span-5 flex flex-col items-center text-center md:items-start md:text-left'>
                    <div className='mb-4'>
                        <img className='' src={Logo} alt="Website Logo" />
                    </div>
                    <h5 className='mb-5'>Curated tools, software, and resources for developers building modern software.</h5>
                    <ul className='flex gap-4 font-bold'>
                        <li>GitHub</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

                {/* Right 3 Link Section */}
                <div className='hidden md:block md:col-span-7'>
                    <div className='grid grid-cols-6'>
                        <div className='col-span-2'>
                            <h5 className='font-bold mb-4'>PRODUCT</h5>
                            <ul className='text-gray-500'>
                                <li>Home</li>
                                <li>Technologies</li>
                                <li>Projects</li>
                            </ul>
                        </div>
                        <div className='col-span-2'>
                            <h5 className='font-bold mb-4'>COMPANY</h5>
                            <ul className='text-gray-500'>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className='col-span-2'>
                            <h5 className='font-bold mb-4'>LEGAL</h5>
                            <ul className='text-gray-500'>
                                <li>Privacy Policy</li>
                                <li>Terms of Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional Footer Bottom */}
            <div className='container mx-auto border-t border-gray-200'>
                <div className='flex justify-between my-3 mx-2 md:my-9 text-gray-400'>
                    <div>
                        <p>&copy; 2026 DevStack. All rights reserved.</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className="cursor-pointer hover:text-black transition-colors">Privacy</p>
                        <p className="cursor-pointer hover:text-black transition-colors">Terms</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer