import { Link } from 'react-router-dom';
import logoIcon from '../assets/Image/logo.450df77d.png'

const Header = () => {
    return (
        <div className='shadow-md'>
            <div className='w-10/12 mx-auto flex justify-between items-center p-2'>
                <Link to={'/'}><img src={logoIcon} className="w-32" alt="" /></Link>
                <div className="flex">
                    <ul className="flex justify-center items-center font-semibold gap-3">
                        <Link to={'/'}><a>Home</a></Link>
                        <Link to={'/events'}><a>Event</a></Link>
                        <Link to={'/'}><a>Blog</a></Link>
                        <Link to={'/our-causes'}><a>Causes</a></Link>
                        <Link to={'/donation-details'}><a>Donation Details</a></Link>

                    </ul>
                </div>
            </div>
         
        </div>
    );
};

export default Header;