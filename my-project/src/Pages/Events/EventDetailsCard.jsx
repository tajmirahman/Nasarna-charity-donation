
import LeftSide from "./LeftSide";


const EventDetailsCard = ({singelEvent}) => {


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12'>

                <aside className='col-span-8'>
                    <LeftSide event={singelEvent}></LeftSide>
                </aside>

                <aside className='col-span-4'> right side</aside>

            </div>
        </div>
    );
};

export default EventDetailsCard;