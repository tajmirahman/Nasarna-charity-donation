
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import EventDetailsCard from './EventDetailsCard';
import { useEffect, useState } from 'react';

const EventDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [events, setEvents] = useState(null);

    // console.log(id);

    useEffect(() => {
        const eventFilter = data.filter(event => event.id == id);
        setEvents(eventFilter)
    }, [data, id])

    return (
        <div>
            <Header></Header>
            <nav
                className='flex justify-center items-center h-[200px]'
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/DHdjhyKp/img-3-6d6b3c93.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className='text-white text-center '>
                    <h1 className='text-4xl font-bold mb-3'>Single Event</h1>
                    <Link to={'/'}><span className='font-semibold text-xl'>Home</span></Link> {'>'}
                    <span className='font-semibold text-xl'
                        style={{ color: location.pathname === '/causes-details' ? '#08cc7f' : 'white' }}
                    >causes</span>
                </div>
            </nav>

            <div className='w-10/12 mx-auto'>
                {
                    events?.map(singelEvent => <EventDetailsCard key={singelEvent.id} event={singelEvent}></EventDetailsCard>)
                }
            </div>

            <Outlet context={events}></Outlet>

        </div>
    );
};

export default EventDetails;