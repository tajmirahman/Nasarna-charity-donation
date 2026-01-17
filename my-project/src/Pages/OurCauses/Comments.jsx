import React from 'react';

const Comments = () => {
    return (
        <div>
            <div className=''>

                <div className='flex gap-3 mt-5'>
                    <fieldset className="fieldset">
                        <input type="text" className="input" placeholder="full name" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <input type="email" className="input" placeholder=" email" />
                    </fieldset>
                </div>
                <fieldset className="fieldset">
                    <input type="text" className="input w-[390px]" placeholder="website" />
                </fieldset>

                <textarea placeholder="write your comments" className="textarea textarea-primary w-[390px] mt-3"></textarea>

                <div className='my-3'>
                    <button type='submit' className='btn text-white bg-[#21c8cb]'>Submit</button>
                </div>

            </div>
        </div>
    );
};

export default Comments;