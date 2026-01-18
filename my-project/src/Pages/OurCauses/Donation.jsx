import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";


const Donation = () => {

    const {addNewDonation}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleDonation=(e)=>{
        e.preventDefault();
        const form=e.target;

       const donationInfo={
            ammount:form.ammount.value,
            fName:form.fName.value,
            lName:form.lName.value,
            email:form.email.value,
            address:form.address.value,
            textarea:form.textarea.value,
        }

        addNewDonation(donationInfo);
        form.reset();

        navigate('/donation-details');
        alert('successfuly paid donation')
    }


    return (
        <div className='my-5'>
            <form onSubmit={handleDonation}>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-xl">Your Donation</legend>
                    <input type="number" name="ammount" className="input w-[390px]" placeholder="Type donation amount here" />
                </fieldset>

                <div className='flex gap-3 mt-5'>
                    <fieldset className="fieldset">
                        <input type="text" name="fName" className="input" placeholder="first name" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <input type="text" name="lName" className="input" placeholder=" last name" />
                    </fieldset>
                </div>

                <div className='flex gap-3'>
                    <fieldset className="fieldset">
                        <input type="email" name="email" className="input" placeholder="Type your email" />
                    </fieldset>

                    <fieldset className="fieldset">
                        <input type="text" name="address" className="input" placeholder=" address" />
                    </fieldset>
                </div>

                <textarea name="textarea" placeholder="Type your message" className="textarea textarea-primary w-[390px] mt-3"></textarea>

                <div className='mt-3'>
                    <button type='submit' className='btn text-white bg-[#21c8cb]'>Submit</button>
                </div>

            </form>

        </div>
    );
};

export default Donation;