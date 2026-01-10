import React from 'react';


const WhatWeDoCard = ({singleData,Icon}) => {
    console.log(singleData.icon, Icon);


    return (
        <div className="md:w-[250px] md:h-[250px] rounded-xl text-center shadow-lg bg-white p-3">
            
            {/* ICON */}
            {Icon && <Icon className="bg-emerald-500 text-white text-4xl mx-auto mb-4 w-16 h-16 p-2 rounded-full" />}

            <h2 className="text-xl font-semibold">
                {singleData.title}
            </h2>

            <p className="mt-2 text-sm opacity-90">
                {singleData.description}
            </p>
        </div>
    );
};

export default WhatWeDoCard;