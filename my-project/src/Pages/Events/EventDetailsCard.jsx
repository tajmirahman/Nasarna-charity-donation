
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


const EventDetailsCard = ({singelEvent,data}) => {
    console.log(singelEvent);


    return (
        <div className="w-10/12 mx-auto mt-5">
            <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>

                <aside className='col-span-8'>
                    <LeftSide event={singelEvent}></LeftSide>
                </aside>

                <aside className='col-span-4'> 
                    <RightSide event={data}></RightSide>
                </aside>

            </div>
        </div>
    );
};

export default EventDetailsCard;