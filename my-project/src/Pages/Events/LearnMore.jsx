import React from 'react';

const LearnMore = ({event}) => {
    console.log(event)
    return (
        <div>
            {event.description?.map((desc,index)=>(
                <div key={index}>
                   <p>{desc.details}</p>
                   {
                    desc.keyPoin?.map((k,i)=>(
                        <div key={i} className='flex gap-2'>
                            <span className='text-3xl text-[#21c8cb]'>*</span> <h2>{k}</h2>
                            </div>
                    ))
                   }
                </div>
                
            ))}
        </div>
    );
};

export default LearnMore;