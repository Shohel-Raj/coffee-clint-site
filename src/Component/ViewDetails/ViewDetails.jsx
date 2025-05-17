import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";


const ViewDetails = () => {
    const detailsData = useLoaderData();
    console.log(detailsData);
    const { photo,details,chef,price,supplier,taste,name}=detailsData;
    return (
        <>
            <section className=" bg-[url('../11.png')] mb-9 ">
                <div className='w-11/12  mx-auto'>
                    <Link to='/' className='flex gap-2 mt-5 hover:text-amber-600 items-center'><FaArrowLeft /> Back to home</Link>
                </div>


                <div className=' w-11/12  mx-auto py-3 px-1.5 mt-2.5 md:mt-5 rounded-2xl md:rounded-3xl md:py-16 md:px-28 bg-[#F4F3F0]'>


                    <div className='grid grid-rows-1 px-4 md:px-0 items-center justify-center md:grid-cols-2'>
                        <div className='justify-center'>
                            <img src={photo} alt="" />
                        </div>
                        <div className='space-y-3.5'>
                            <h1 className='font-bold text-2xl'>Name :{name}</h1>
                            <p className='font-bold'> Chef :<span className='font-normal'> {chef} </span></p>
                            <p className='font-bold'>Supplier : <span className='font-normal'>{supplier}</span></p>
                            <p className='font-bold'>Taste : <span className='font-normal'>  {taste} </span></p>
                            <p className='font-bold'>Details : <span className='font-normal'> {details} </span></p>
                            <p className='font-bold'>Price : <span className='font-normal'> {price} </span></p>
                        </div>
                    </div>




                </div>




            </section>
        </>
    );
};

export default ViewDetails;