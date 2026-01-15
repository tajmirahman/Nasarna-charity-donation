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

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10'>
                <div>
                    <img src={logoIcon} className='w-48 filter brightness-0 invert' alt="" />
                </div>
                <div>
                    <h2 className='text-white'>Top News</h2>
                </div>
                <div>
                    <h2 className='text-white'>Useful Links</h2>
                </div>
                <div>
                    <h2 className='text-white'>Contact</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;