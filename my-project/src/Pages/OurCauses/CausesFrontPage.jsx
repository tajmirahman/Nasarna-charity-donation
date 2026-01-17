import React, { useEffect, useState } from 'react';
import CausesFrontCard from './CausesFrontCard';

const CausesFrontPage = () => {

    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(0);
    // for mobile screen responsive
    const [slidesPerView, setSlidesPerView] = useState(3);

    let dataSlice = data.slice(current, current + slidesPerView);

    // ✅ if less than 3, take from start
    if (dataSlice.length < slidesPerView) {
        const remaining = slidesPerView - dataSlice.length;
        dataSlice = dataSlice.concat(data.slice(0, remaining));
    }

    // for all device  responsive
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1); // 📱 mobile
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2); // 📲 tablet
            } else {
                setSlidesPerView(3); // 💻 desktop
            }
        };

        handleResize(); // first load
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


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
        fetch('/OurCauses.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])




    return (
        <div className='md:w-10/12 mx-auto'>
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