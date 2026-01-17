import React from 'react';

const Comments = () => {

    const handleComments=(e)=>{
        e.preventDefault();
        console.log('yes comments form watch')
    }

    return (
        <div>
            <form onSubmit={handleComments} >

                <div className='flex gap-3 mt-5'>
                    <fieldset className="fieldset">
                        <input type="text" name='name' className="input" placeholder="full name" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <input type="email" name='email' className="input" placeholder=" email" />
                    </fieldset>
                </div>
                <fieldset className="fieldset">
                    <input type="text" className="input w-[390px]" placeholder="website" />
                </fieldset>

                <textarea placeholder="write your comments" className="textarea textarea-primary w-[390px] mt-3"></textarea>

                <div className='my-3'>
                    <button type='submit' className='btn text-white bg-[#21c8cb]'>Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Comments;