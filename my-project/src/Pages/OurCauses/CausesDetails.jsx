import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CausesDetails = () => {
    const data = useLoaderData();
    console.log(data);



    return (
        <div>
            {
                data.map(singleCauses => (
                    <div>
                        <h1>{singleCauses.title}</h1>
                        <div>
                            {
                                singleCauses.description?.map((desc, index) => {
                                    return(
                                        <div key={index}>
                                        <h2 className="text-xl font-semibold text-gray-800">
                                            {desc["1stHeading"]}
                                        </h2>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CausesDetails;