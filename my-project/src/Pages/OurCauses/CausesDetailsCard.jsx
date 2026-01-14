import React from 'react';

const CausesDetailsCard = ({ causes }) => {
    console.log(causes);
    return (
        <div className='md:flex-row'>
            <div className='w-full'>
                <img className='w-full  object-contain' src={causes.image} alt="" />
            </div>
            <div className='my-5 space-x-5 md:p-3 *:border-4 '>
                <button className='btn bg-[#21c8cb] rounded-3xl'>Read More</button>
                <button className='btn bg-[#21c8cb] rounded-3xl'>Donation</button>
                <button className='btn bg-[#21c8cb] rounded-3xl'>Comments</button>
            </div>
            <div>
                {causes.description?.map((desc,index)=>(
                    <div key={index} className=''>
                        <h1 className='md:text-3xl font-semibold text-center mb-5'>{desc["1stHeading"]}</h1>
                        <div className='space-y-3 text-justify'>{desc.details?.map((p,i)=>(
                            <p key={i}>{p}</p>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CausesDetailsCard;