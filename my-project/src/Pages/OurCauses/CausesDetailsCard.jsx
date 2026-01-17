import { useState } from "react";
import { Link, } from "react-router-dom";
import ReadMore from "./ReadMore";
import Donation from "./Donation";
import Comments from "./Comments";


const CausesDetailsCard = ({ causes }) => {
    const [active, setActive]=useState('read');

    const handleRead=()=>{
        setActive('read');
    }
    const handleDonation=()=>{
        setActive('donation');

    }

    const handleComment=()=>{
        setActive('comment')
    }



    return (
        <>
        <div className='md:flex-row'>
            <div className='w-full'>
                <img className='w-full  object-contain' src={causes.image} alt="" />
            </div>
            <div className='my-5 space-x-5 md:p-3 *:border-4 '>
                <button onClick={handleRead} className='btn bg-[#21c8cb] rounded-3xl'>Read More</button>
                <button onClick={handleDonation} className='btn bg-[#21c8cb] rounded-3xl'>Donation</button>
                <button onClick={handleComment} className='btn bg-[#21c8cb] rounded-3xl'>Comments</button>
            </div>

            <div>
                {
                    active === 'read' && (
                        <ReadMore causes={causes}></ReadMore>
                    )
                }
            </div>
            <div>
                {
                    active === 'donation' && (
                        <Donation></Donation>
                    )
                }
            </div>
            <div>
                {
                    active === 'comment' && (
                        <Comments></Comments>
                    )
                }
            </div>


            

        </div>


        </>
    );
};

export default CausesDetailsCard;