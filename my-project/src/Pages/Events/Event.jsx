
import { useLoaderData } from 'react-router-dom';
import EventCard from './EventCard';
import Footer from '../../Components/Footer';

const Event = () => {
    const data=useLoaderData();
    // console.log(data)
    



    return (
        <div>
            <h2 className='text-3xl text-center font-semibold'>Upcoming Events</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    data?.map(event=><EventCard key={event.id} event={event}></EventCard>)
                }
            </div>

                <Footer></Footer>

        </div>
    );
};

export default Event;