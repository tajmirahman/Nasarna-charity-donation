
import Header from '../Components/Header';
import Navbar from '../Components/Navber';
import { Outlet } from 'react-router-dom';
import CausesFrontPage from '../Pages/OurCauses/CausesFrontPage';
import Volunteer from '../Pages/Volunteer/Volunteer';
import Footer from '../Components/Footer';
import Event from '../Pages/Events/Event';
import EventSection from '../Pages/Events/EventSection';



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
                <EventSection></EventSection>
            </section>

            <section>
                <Volunteer></Volunteer>
            </section>

            <section>
                
            </section>

            

            {/* footer section start here */}
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;