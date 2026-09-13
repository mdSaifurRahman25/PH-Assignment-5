import BannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className='container mx-auto px-4 py-12 md:py-20'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-10'>

                {/* Left Content */}
                <div className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight'>
                        Build Your Ideal <br className='hidden sm:inline' />
                        <span className="brand-gradient bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className='mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8'>
                        <button className='w-full sm:w-auto brand-gradient text-white px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity shadow-sm cursor-pointer'>
                            Explore Technologies
                        </button>
                        <button className='w-full sm:w-auto border border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl font-medium hover:bg-gray-50 transition-colors cursor-pointer'>
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                    <img
                        className='w-full max-w-md lg:max-w-full h-auto object-contain'
                        src={BannerImage}
                        alt="Website Banner"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;