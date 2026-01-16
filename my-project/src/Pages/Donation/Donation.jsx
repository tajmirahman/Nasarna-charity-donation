import React from 'react';

const Donation = () => {
    return (
        <div className="mt-6 p-4 border rounded">
            <h2 className="text-2xl font-bold mb-2">Make a Donation</h2>
            <input className="input input-bordered w-full mb-2" placeholder="Amount" />
            <button className="btn btn-primary">Donate Now</button>
        </div>
    );
};

export default Donation;