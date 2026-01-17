import React from 'react';

const ReadMore = ({ causes }) => {
    return (
        <div>
            {causes.description?.map((desc, index) => (
                <div key={index} className=''>
                    <h1 className='md:text-3xl font-semibold mb-5'>{desc["1stHeading"]}</h1>
                    <div className='space-y-3 text-justify'>{desc.details?.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}</div>

                    <div>
                        <h2 className='md:text-3xl font-semibold my-5'>{desc["2ndHeading"]}</h2>
                        <p className='mb-5'>{desc["2ndDetails"]}</p>
                        <div className=''>{
                            desc.keyPoin?.map((list, i) => (
                                <div className='flex items-center gap-2'>
                                    <span className='text-4xl mt-2 text-[#21c8cb]'>*</span>
                                    <p key={i}>{list}</p>
                                </div>
                            ))
                        }</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReadMore;