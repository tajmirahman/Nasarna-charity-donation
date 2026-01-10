import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import WhatWeDoCard from './WhatWeDoCard';
import { FaGraduationCap, FaHandHoldingWater, FaPlay } from 'react-icons/fa';
import { FaBowlFood, FaHeartPulse } from 'react-icons/fa6';
import whatWePic from '../../assets/Image/whatWeDo.png'

const WhatWeDo = () => {
    const data = useLoaderData();
    const [open, setOpen] = useState(false)
    console.log(data)

    const iconMap = {
        FaHandHoldingWater: FaHandHoldingWater,
        FaBowlFood: FaBowlFood,
        FaGraduationCap: FaGraduationCap,
        FaHeartPulse: FaHeartPulse
    }


    return (
        <>
            <div className='md:w-10/12 mx-auto mt-10'>
                <h1 className='text-[#08cc7f] text-center'>What We Do?</h1>
                <h2 className='text-3xl font-semibold text-center mt-2 mb-10'>We Are In A Mission To Help The Helpless
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                    {
                        data.map(singleData => {
                            const Icon = iconMap[singleData.icon];
                            return (
                                <WhatWeDoCard
                                    singleData={singleData}
                                    Icon={Icon}
                                    key={singleData.id}
                                ></WhatWeDoCard>
                            )
                        })
                    }
                </div>
            </div>

            <div className='bg-white mt-20'>
                <div className="md:w-10/12 mx-auto">
                    <section className=" overflow-hidden">
                        <div className="max-w-7xl mx-auto px-4 py-4  grid lg:grid-cols-2 gap-10 items-center">

                            {/* LEFT CONTENT */}
                            <div className='mt-10'>
                                <h1 className='text-[#08cc7f]'>What We Do?</h1>
                                <h1 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mt-5">
                                    We Are In A Mission To Help The Helpless
                                </h1>

                                <p className="mt-6 text-gray-600 text-justify max-w-md">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there. <br /><br />

                                    Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,




                                </p>

                                {/* BUTTONS */}
                                <div className="mt-8 flex items-center gap-6">
                                    <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8">
                                        Donate Now
                                    </button>

                                    <button onClick={() => setOpen(true)} className="flex items-center gap-3 text-gray-700 font-medium hover:text-emerald-500">
                                        <span className="w-10 h-10 rounded-full border border-emerald-500 flex items-center justify-center text-emerald-500">
                                            <FaPlay className="text-sm ml-[2px]" />
                                        </span>
                                        Watch Our Video
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className=''>
                                <img className='w-full h-full object-cover' src={whatWePic} alt="" />
                            </div>

                        </div>
                    </section>

                </div>

                {/* VIDEO MODAL */}
                {open && (
                    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
                        <div className="relative bg-black rounded-xl w-[90%] max-w-3xl">

                            {/* Close Button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute -top-10 right-0 text-white text-3xl"
                            >
                                ✕
                            </button>

                            {/* Video */}
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-xl"
                                    src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
                                    title="Charity Video"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                ></iframe>
                            </div>

                        </div>
                    </div>
                )}

            </div>
        </>

    );
};

export default WhatWeDo;