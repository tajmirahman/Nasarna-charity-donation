
import { Link, Outlet, useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Components/Header';
// import EventDetailsCard from './EventDetailsCard';
// import { useEffect, useState } from 'react';

const EventDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    // const [events, setEvents] = useState(null);

    // console.log(id);
    const event = data.find(e => e.id == id);

    // useEffect(() => {
    //     const eventFilter = data.filter(event => event.id == id);
    //     setEvents(eventFilter)
    // }, [data, id])

    return (
        <div>
            <Header></Header>
            <div
                className="h-[200px] bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/DHdjhyKp/img-3-6d6b3c93.png)"
                }}
            >
                <h1 className="text-4xl font-bold">Single Event</h1>
            </div>

            {/* <div className='w-10/12 mx-auto'>
                {
                    events?.map(singelEvent => <EventDetailsCard key={singelEvent.id} event={singelEvent}></EventDetailsCard>)
                }
            </div> */}

            <Outlet context={event}></Outlet>

        </div>
    );
};

export default EventDetails;