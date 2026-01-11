
import Header from '../Components/Header';
import Navbar from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import CausesFrontPage from '../Pages/OurCauses/CausesFrontPage';



const MainLayout = () => {

    return (
        <div className='bg-[#f5f9fd] '>
            <Header></Header>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <section>
              <CausesFrontPage></CausesFrontPage>
            </section>

        </div>
    );
};

export default MainLayout;