import React from 'react';

const CausesCard = ({ causes }) => {
    console.log(causes)
    return (
        <div>

            <div className="card">
                <img className='w-[300px] h-[280px] mx-auto object-contain' src={causes.image} alt="" />

                <div className="card-body">
                    <h2 className='text-xl mb-10'>{causes.title}</h2>
                    <progress
                        className="relative progress progress-success"
                        value={causes.percentage}
                        max="100"
                    ></progress>

                    <div className="flex justify-between text-sm">
                        <p>Raised: ${causes.raised}</p>
                        <p>Goal: ${causes.goal}</p>
                    </div>

                    <span className="absolute top-[350px] left-60 badge badge-success ">
                        {causes.percentage}%
                    </span>
                </div>
                <div>
                    <button className='btn'>Learn more</button>
                    <button className='btn'>Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CausesCard;