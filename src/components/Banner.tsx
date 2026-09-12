import BannerImage from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='container mx-auto py-20'>
            <div className='flex items-center justify-between'>
                {/* Left Content */}
                <div className='w-1/2'>
                    <h1 className='text-[#0F172A] text-6xl font-bold leading-tight'>
                        Build Your Ideal <br />
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#081876] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className='mt-6 text-xl font-normal text-gray-600 max-w-xl'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    {/* Buttons */}
                    <div className='flex items-center gap-4 mt-8'>
                        <button className='bg-gradient-to-r from-[#FF6B35] to-[#E51E7E] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity'>
                            Explore Technologies
                        </button>
                        <button className='border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors'>
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className='w-1/2 flex justify-end'>
                    <img className='max-w-full h-auto' src={BannerImage} alt="Website Banner" />
                </div>
            </div>
        </div>
    )
}

export default Banner