
import { Link, Outlet } from 'react-router-dom';

const LeftSide = ({event}) => {
    return (
        <div>
            <img src="" alt="" />

            <div>
                <Link to={`/learn-more/`} className='btn'>Learn More</Link>
                <Link to={'/donation'} className='btn'>Donation</Link>
            </div>

            <Outlet></Outlet>

        </div>
    );
};

export default LeftSide;