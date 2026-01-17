
import { useLoaderData } from 'react-router-dom';
import EventCard from './EventCard';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

const Event = () => {
    const data = useLoaderData();
    // console.log(data)




    return (
        <div>

            <Header></Header>
            <div
                className="h-[200px] bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/DHdjhyKp/img-3-6d6b3c93.png)"
                }}
            >
                <h1 className="text-4xl font-bold"> Events</h1>
            </div>

            <div className='md:w-10/12 mx-auto'>
                <h2 className='text-3xl text-center font-semibold my-10'>Upcoming Events</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
                    {
                        data?.map(event => <EventCard key={event.id} event={event}></EventCard>)
                    }
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Event;