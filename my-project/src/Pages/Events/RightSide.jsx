import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


const RightSide = ({ event }) => {
    console.log(event);
    return (
        <div>
            <h2 className="text-2xl text-center mb-5">Recent Post</h2>


            <div className="shadow-lg space-y-3 *:border">
                {
                    event?.map(singleEvent => (


                        <div className="flex  items-center gap-3">

                            <img className="w-20" src={singleEvent.image} alt="" />
                            <div>
                                <h2 className="font-semibold text-md">{singleEvent.title}</h2>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-1">
                                        <span><IoLocationOutline /></span>
                                        <p> {singleEvent.city}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IoIosTimer />
                                        <p>{singleEvent.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default RightSide;