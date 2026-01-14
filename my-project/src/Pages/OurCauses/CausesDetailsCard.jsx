import React from 'react';

const CausesDetailsCard = ({ causes }) => {
    console.log(causes);
    return (
        <div className='md:flex-row'>
            <div className='w-full'>
                <img className='w-full  object-contain' src={causes.image} alt="" />
            </div>
            <div className='my-5 space-x-5 p-3 *:border-4 '>
                <button className='btn bg-[#21c8cb] rounded-3xl'>Read More</button>
                <button className='btn bg-[#21c8cb] rounded-3xl'>Donation</button>
                <button className='btn bg-[#21c8cb] rounded-3xl'>Comments</button>
            </div>
        </div>
    );
};

export default CausesDetailsCard;