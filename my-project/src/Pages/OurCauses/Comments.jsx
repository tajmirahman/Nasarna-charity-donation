import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const Comments = () => {

    const { comment, addNewComments } = useContext(AuthContext);

    const handleComments = (e) => {
        e.preventDefault();
        const form = e.target;

        const commentsInfo = {
            id: Date.now(),
            name: form.name.value,
            email: form.email.value,
            textarea: form.textarea.value
        }

        addNewComments(commentsInfo);
        form.reset();




        // console.log({ name, email, textarea })
    }

    return (
        <div>

            <div className='mb-10'>
                {
                    comment?.map(singleComment => (
                        <div>
                            <h2>{singleComment.name}</h2>
                            <p>{singleComment.email}</p>
                            <p>{singleComment.textarea}</p>
                        </div>
                    ))
                }
            </div>


            <form onSubmit={handleComments} >
                <div className='flex gap-3 mt-5'>
                    <fieldset className="fieldset">
                        <input type="text" name='name' className="input" placeholder="full name" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <input type="email" name='email' className="input" placeholder=" email" />
                    </fieldset>
                </div>

                <textarea name='textarea' placeholder="write your comments" className="textarea textarea-primary w-[390px] mt-3"></textarea>

                <div className='my-3'>
                    <button type='submit' className='btn text-white bg-[#21c8cb]'>Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Comments;