import React from 'react';

const Contact = () => {
    return (
        <div className='space-y-3'>
            <input type="text" placeholder="Type your name" className="input input-neutral" />
            <input type="email" placeholder="Type your email" className="input input-neutral" />
            <textarea placeholder="Type your message" className="textarea textarea-primary"></textarea>
            <div>
                <button className='btn bg-[#21c8cb] mb-3'>Submit</button>
            </div>

        </div>
    );
};

export default Contact;