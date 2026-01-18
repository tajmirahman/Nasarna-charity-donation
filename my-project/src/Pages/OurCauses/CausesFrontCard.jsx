import { Link } from "react-router-dom";


const CausesFrontCard = ({ item }) => {



    return (
        <div>
            <div className="card shadow-md">
                <img className='w-full h-full object-cover' src={item.image} alt="" />

                <div className="card-body">
                    <h2 className='text-xl mb-10'>{item.title}</h2>
                    <progress
                        className="relative progress progress-success"
                        value={item.percentage}
                        max="100"
                    ></progress>

                    <div className="flex justify-between text-sm">
                        <p>Raised: ${item.raised}</p>
                        <p>Goal: ${item.goal}</p>
                    </div>

                    <span className="absolute top-[380px] left-60 badge badge-success ">
                        {item.percentage}%
                    </span>
                </div>
                <div className='flex p-2 gap-2'>
                    <Link to={`/causes-details/${item.id}`} className='btn flex-1' >Learn more</Link>
                    <Link to={'/donation-now'} className='btn flex-1 bg-[#21c8cb] text-white'>Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default CausesFrontCard;