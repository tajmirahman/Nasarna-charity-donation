import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WhatWeDoCard from './WhatWeDoCard';
import { FaGraduationCap, FaHandHoldingWater } from 'react-icons/fa';
import { FaBowlFood, FaHeartPulse } from 'react-icons/fa6';
import Navbar from '../../Components/Navber';

const WhatWeDo = () => {
    const data = useLoaderData();
    console.log(data)

    const iconMap = {
        FaHandHoldingWater: FaHandHoldingWater,
        FaBowlFood: FaBowlFood,
        FaGraduationCap: FaGraduationCap,
        FaHeartPulse: FaHeartPulse
    }


    return (
        <div className='md:w-10/12 mx-auto mt-10'>
            <h1 className='text-[#08cc7f] text-center'>What We Do?</h1>
            <h2 className='text-3xl font-semibold text-center mt-2 mb-5'>We Are In A Mission To Help The Helpless
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                {
                    data.map(singleData => {
                        const Icon = iconMap[singleData.icon];
                        return(
                            <WhatWeDoCard
                            singleData={singleData}
                            Icon={Icon}
                            key={singleData.id}
                            ></WhatWeDoCard>
                        )
                    })
                }
            </div>

            <div>
              
            </div>

        </div>
    );
};

export default WhatWeDo;