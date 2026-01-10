import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WhatWeDoCard from './WhatWeDoCard';

const WhatWeDo = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            <h1 className='text-[#08cc7f] text-center'>What We Do?</h1>
            <h2 className='text-3xl font-semibold text-center mt-2'>We Are In A Mission To Help The Helpless
            </h2>

            <div>
                {
                    data.map(singleData=><WhatWeDoCard singleData={singleData}
                    key={singleData.id}></WhatWeDoCard>)
                }
            </div>
        </div>
    );
};

export default WhatWeDo;