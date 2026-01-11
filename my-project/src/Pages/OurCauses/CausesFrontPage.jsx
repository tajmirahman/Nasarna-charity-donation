import React, { useEffect, useState } from 'react';
import CausesFrontCard from './CausesFrontCard';

const CausesFrontPage = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('OurCauses.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <h1 className='text-[#08cc7f] text-center'>Our Causes</h1>
            <h2 className='text-2xl md:text-4xl text-center p-2 my-8'>Popular Causes What You Should Know
                </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    data?.map(item => <CausesFrontCard item={item} key={item.id}></CausesFrontCard>)
                }
            </div>
        </div>
    );
};

export default CausesFrontPage;