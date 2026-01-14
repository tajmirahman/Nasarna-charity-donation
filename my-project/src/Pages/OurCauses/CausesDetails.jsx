import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import CausesDetailsCard from './CausesDetailsCard';

const CausesDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    // console.log(data,id);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const dataFind = data.filter(d => d.id == id);
        setDetails(dataFind)
    }, [data, id])



    return (
        <>

            <div >

                <Header></Header>
                <nav
                    className='flex justify-center items-center h-[200px]'
                    style={{
                        backgroundImage:
                            "url(https://i.ibb.co.com/DHdjhyKp/img-3-6d6b3c93.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    <div className='text-white text-center '>
                        <h1 className='text-4xl font-bold mb-3'>Our Causes</h1>
                        <Link to={'/'}><span className='font-semibold text-xl'>Home</span></Link> {'>'}
                        <span className='font-semibold text-xl'
                            style={{ color: location.pathname === '/causes-details' ? '#08cc7f' : 'white' }}
                        >causes</span>
                    </div>
                </nav>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-3 w-9/12 mx-auto mt-10'>
                    <aside className='md:col-span-9'>
                        <div>
                            {
                                details?.map(detail => <CausesDetailsCard key={details.id}
                                    causes={detail}
                                ></CausesDetailsCard>)
                            }
                        </div>
                    </aside>
                    <aside className='md:col-span-3'>right side</aside>
                </div>
            </div>



            <div>
                {
                    // data.map(singleCauses => (
                    //     <div>
                    //         {/* <h1>{singleCauses.title}</h1> */}
                    //         <div>
                    //             {
                    //                 singleCauses.description?.map((desc, index) => {
                    //                     return (
                    //                         <>
                    //                             <div key={index}>
                    //                                 <h2 className="text-xl font-semibold text-gray-800">
                    //                                     {desc["1stHeading"]}
                    //                                 </h2>
                    //                             </div>
                    //                             <div>
                    //                                 <p>
                    //                                     {desc["details"]}
                    //                                 </p>
                    //                                 <h2>{desc.keyPoin?.map((p, i) => <p key={i}>{p}</p>)}</h2>

                    //                             </div>
                    //                         </>
                    //                     )
                    //                 })
                    //             }
                    //         </div>
                    //     </div>
                    // ))
                }
            </div>

        </>
    );
};

export default CausesDetails;