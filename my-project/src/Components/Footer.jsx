import logoIcon from '../assets/Image/logo.450df77d.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoLocationOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { GrMailOption } from "react-icons/gr";

const Footer = () => {
    return (
        <div className='bg-[#062265] p-6'>
            <div className='w-5/12 mx-auto '>
                <h2 className='text-3xl text-white my-10 text-center '>Follow us For ferther information</h2>
                <div className='relative text-center'>
                    <input type="text" placeholder="Enter your mail" class=" input input-accent rounded-3xl p" />
                    <button className='absolute right-[90px] btn bg-[#08cc7f] rounded-3xl text-white font-semibold'>subscribe</button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10'>
                <div className='space-y-4'>
                    <img src={logoIcon} className='w-48 filter brightness-0 invert' alt="" />
                    <p className='text-white'>Build and Earn with your online store with lots of cool and exclusive wpo-features</p>
                    <div className='flex justify-center items-center gap-4'>
                        <FaFacebook className='text-3xl text-white' />
                        <IoLogoGoogleplus className='text-3xl text-white'/>
                        <FaGithub className='text-3xl text-white'/>
                    </div>
                </div>
                <div>
                    <h2 className='text-white text-3xl text-center'>Top News</h2>
                </div>
                <div>
                    <h2 className='text-white text-3xl text-center mb-3'>Useful Links</h2>
                    <div className='text-white  space-y-3 text-center'>
                        <Link>About Us</Link><br />
                        <Link>Our Causes</Link><br />
                        <Link>Our Event</Link><br />
                        <Link>Our Blogs</Link>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-white text-3xl text-center mb-3'>Contact</h2>
                    <p className='text-white'>online store with lots of cool and exclusive wpo-features</p>
                    <div className='flex items-center gap-3 text-white'>
                        <IoLocationOutline />
                        <p>24 uttara, Dhaka-1207</p>
                    </div>
                    <div  className='flex items-center gap-3 text-white'>
                        <MdAddIcCall />
                        <p>+880 131-476-1277</p>
                    </div>
                    <div  className='flex items-center gap-3 text-white'>
                        <GrMailOption />
                        <span>tajmilurrahman91@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;