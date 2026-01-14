import React from 'react';

const CausesDetailsCard = ({ causes }) => {
    console.log(causes);
    return (
        <div>
            <figure className='w-full h-[400px]'>
                <img className='w-[600px] h-[600px] object-contain' src={causes.image} alt="" />
            </figure>
            <div>
                <button className='btn bg-[#21c8cb]'>Read More</button>
                <button className='btn bg-[#21c8cb]'>Donation</button>
                <button className='btn bg-[#21c8cb]'>Comments</button>
            </div>
        </div>
    );
};

export default CausesDetailsCard;