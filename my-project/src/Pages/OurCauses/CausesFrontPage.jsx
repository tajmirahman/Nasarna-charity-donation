import React, { useEffect, useState } from 'react';
import CausesFrontCard from './CausesFrontCard';

const CausesFrontPage = () => {

    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);
    // const dataSlice = data.slice(current, current + 3);

    let dataSlice = data.slice(current, current + 3);

    // ✅ if less than 3, take from start
    if (dataSlice.length < 3) {
        const remaining = 3 - dataSlice.length;
        dataSlice = dataSlice.concat(data.slice(0, remaining));
    }

    useEffect(() => {
        if (data.length === 0) return;

        const sliderIntervel = setInterval(() => {
            setCurrent((prev) => {
                return prev === data.length - 1 ? 0 : prev + 1;
            })
        }, 3000);

        return () => {
            clearInterval(sliderIntervel);
        }

    }, [data.length])


    useEffect(() => {
        fetch('OurCauses.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])




    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-[#08cc7f] text-center'>Our Causes</h1>
            <h2 className='text-2xl md:text-4xl text-center p-2 my-8'>Popular Causes What You Should Know
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    dataSlice?.map(item => <CausesFrontCard
                        item={item}
                        key={item.id}
                    ></CausesFrontCard>)
                }
            </div>
        </div>
    );
};

export default CausesFrontPage;