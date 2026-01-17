import React from 'react';

const Donation = () => {
    return (
        <div className='my-5'>
            <div className=''>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Your Donation</legend>
                    <input type="number" className="input w-[390px]" placeholder="Type donation amount here" />
                </fieldset>

                <div className='flex gap-3 mt-5'>
                    <fieldset className="fieldset">
                        <input type="text" className="input" placeholder="first name" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <input type="text" className="input" placeholder=" last name" />
                    </fieldset>
                </div>

                <div className='flex gap-3'>
                    <fieldset className="fieldset">
                        <input type="email" className="input" placeholder="Type your email" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <input type="text" className="input" placeholder=" address" />
                    </fieldset>
                </div>

                <textarea placeholder="Type your message" className="textarea textarea-primary w-[390px] mt-3"></textarea>

                <div className='mt-3'>
                    <button type='submit' className='btn text-white bg-[#21c8cb]'>Submit</button>
                </div>

            </div>

        </div>
    );
};

export default Donation;