
import Header from '../Components/Header';
import Navbar from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import CausesFrontPage from '../Pages/OurCauses/CausesFrontPage';
import Volunteer from '../Pages/Volunteer/Volunteer';



const MainLayout = () => {

    return (
        <div className='bg-[#f5f9fd] '>
            <Header></Header>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <section>
              <CausesFrontPage></CausesFrontPage>
            </section>

            <section>
                <Volunteer></Volunteer>
            </section>

        </div>
    );
};

export default MainLayout;