import React from 'react';

const CausesCard = ({causes}) => {
    console.log(causes)
    return (
        <div>
            <div>
                <img src={causes.image} alt="" />
                <h2>{causes.title}</h2>
            </div>
        </div>
    );
};

export default CausesCard;