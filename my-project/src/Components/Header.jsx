import { Link } from 'react-router-dom';
import logoIcon from '../assets/Image/logo.450df77d.png'

const Header = () => {
    return (
        <div className='shadow-md'>
            <div className="md:w-8/12 mx-auto navbar bg-base-100 ">
                <div className="flex-1">
                    <Link to={'/'}><img src={logoIcon} className="w-32"></img></Link>
                </div>
                <div className="flex-none">
                    <ul className="flex justify-center items-center gap-3">
                        <Link to={'/'}><a>Home</a></Link>
                        <Link to={'/'}><a>Event</a></Link>
                        <Link to={'/'}><a>Blog</a></Link>
                        <Link to={'/'}><a>Pages</a></Link>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;