import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import Header from '../../Components/Header';

const DonationDetails = () => {
    const {donation}=useContext(AuthContext);



    return (
        <div>
            <Header></Header>

            <h2 className='text-3xl text-center my-10'> Donation details </h2>
            <div className='md:w-9/12 mx-auto space-y-1'>
                {
                    donation?.map(singleDonation=>(
                        <div className='w-4/6 md:w-3/6 mx-auto border-2 p-2'>
                            <h2 className='text-xl font-semibold text-center mb-2'>Amonut-{singleDonation.ammount} tk/.</h2>
                            <div className='flex gap-2'>
                                <h3 className='font-semibold'>Name- {singleDonation.fName}</h3>

                                <h3 className='font-semibold'>{singleDonation.lName}</h3>
                            </div>
                            <div>
                                <p className='font-semibold'>Email- {singleDonation.email}</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Address-  {singleDonation.address}</p>
                            </div>
                            <div>
                                <p className='font-semibold'> Message- {singleDonation.textarea}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DonationDetails;