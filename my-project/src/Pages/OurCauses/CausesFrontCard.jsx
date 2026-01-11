

const CausesFrontCard = ({ item }) => {



    return (
        <div>
            <div className="card shadow-md">
                <img className='w-[300px] h-[280px] mx-auto object-contain' src={item.image} alt="" />

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

                    <span className="absolute top-[350px] left-60 badge badge-success ">
                        {item.percentage}%
                    </span>
                </div>
                <div className='flex p-2 gap-2'>
                    <button className='btn flex-1' >Learn more</button>
                    <button className='btn flex-1 bg-[#21c8cb] text-white'>Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default CausesFrontCard;