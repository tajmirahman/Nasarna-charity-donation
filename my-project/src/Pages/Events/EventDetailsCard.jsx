import { useOutletContext } from "react-router-dom";
import LeftSide from "./LeftSide";


const EventDetailsCard = ({ event }) => {
      const eventContex=useOutletContext();

      if (!eventContex) return null;

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12'>

                <aside className='col-span-8'>
                    <LeftSide event={event}></LeftSide>
                </aside>

                <aside className='col-span-4'> right side</aside>

            </div>
        </div>
    );
};

export default EventDetailsCard;