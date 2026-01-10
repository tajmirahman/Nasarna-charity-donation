import { FaPlay } from "react-icons/fa";
import bannerImag from '../assets/Image/banner.png'

const Navbar = () => {
    return (
        <div className="md:w-10/12 mx-auto mt-0.5">
            <section className="bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Let’s be Kind for <br />
                            <span className="text-emerald-500">Children</span>
                        </h1>

                        <p className="mt-6 text-gray-600 max-w-md">
                            High Quality Charity Theme in Envato Market.
                            You Can Satisfied Yourself By Helping.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex items-center gap-6">
                            <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                                Donate Now
                            </button>

                            <button className="flex items-center gap-3 text-gray-700 font-medium hover:text-emerald-500">
                                <span className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                    <FaPlay className="text-sm ml-[2px]" />
                                </span>
                                Watch Our Video
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Blob background */}
                        <div className="absolute -z-10 w-[520px] h-[520px] bg-emerald-100 rounded-[60%_40%_55%_45%]"></div>

                        {/* Image */}
                        <div className="w-[480px] h-[480px] rounded-[60%_40%_55%_45%] border-8 border-emerald-200 overflow-hidden">
                            <img
                                src={bannerImag}
                                alt="Children Help"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Navbar;
