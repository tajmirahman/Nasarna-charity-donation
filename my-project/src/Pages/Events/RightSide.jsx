import { useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const RightSide = ({ event }) => {
    const [current, setCurrent] = useState(0);

    let eventSlice = event.slice(current, current + 3);

    if (eventSlice.length > 3) {
        const remaining = 3 - eventSlice.length;
        eventSlice = eventSlice.concat(event.slice(0, remaining));
    }

    useEffect(() => {
        if (event.length === 0) return;

        const sliderIntervel = setInterval(() => {
            setCurrent((prev) => {
                return prev === event.length - 1 ? 0 : prev + 1;
            });

            return () => {
                clearInterval(sliderIntervel);
            }

        }, 3000);
    }, [event.length])


    return (
        <div>
            <h2 className="text-2xl text-center mb-5">Recent Post</h2>


            <div className="shadow-lg space-y-3 *:border">
                {
                    eventSlice?.map(singleEvent => (


                        <div key={singleEvent.id} className="flex  items-center gap-3">

                            <img className="w-20" src={singleEvent.image} alt="" />
                            <div>
                                <Link to={`/event-details/${singleEvent.id}`} className="font-semibold text-md">{singleEvent.title}</Link>
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

                <div className='flex justify-center gap-2 my-4'>
                    {
                        eventSlice.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-[#29A3AA] scale-125" : "bg-gray-300"}`}
                            ></button>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default RightSide;