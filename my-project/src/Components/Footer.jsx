import logoIcon from '../assets/Image/logo.450df77d.png'

const Footer = () => {
    return (
        <div className='bg-[#062265] p-6'>
            <div className='w-5/12 mx-auto space-y-4'>
                <h2 className='text-3xl text-white mt-10'>Follow us For ferther information</h2>
                <div>
                    <input type="text" placeholder="Accent" class=" input input-accent rounded-3xl" />
                    <button className=' btn bg-[#08cc7f] rounded-3xl text-white font-semibold'>subscribe</button>
                </div>
            </div>

            <div>
                <div>
                    <img src={logoIcon} className='w-48 text-white' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;