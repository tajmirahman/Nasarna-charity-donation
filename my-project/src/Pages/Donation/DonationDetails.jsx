import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import Header from '../../Components/Header';

const DonationDetails = () => {
    const {donation}=useContext(AuthContext);



    return (
        <div>
            <Header></Header>

            <h2 className='text-3xl text-center'> Donation details </h2>
            <div>
                {
                    donation?.map(singleDonation=>(
                        <div>
                            <h2>Amonut-{singleDonation.ammount}</h2>
                            <div className='flex gap-2'>
                                <h3>Name- {singleDonation.fName}</h3>
                                <h3>{singleDonation.lName}</h3>
                            </div>
                            <div>
                                <p>{singleDonation.email}</p>
                            </div>
                            <div>
                                <p>{singleDonation.address}</p>
                            </div>
                            <div>
                                <p>{singleDonation.textarea}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DonationDetails;