import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";

const ViewDetails = () => {
    return (
        <>
             <section className=" h-screen   bg-[url('../11.png')] mb-9 ">
                <div className='w-11/12  mx-auto'>
                    <Link to='/' className='flex gap-2 mt-5 hover:text-amber-600 items-center'><FaArrowLeft  /> Back to home</Link>
                </div>
               

                <div className=' w-11/12  mx-auto py-3 px-1.5 mt-2.5 md:mt-5 rounded-2xl md:rounded-3xl md:py-16 md:px-28 bg-[#F4F3F0]'>
                
                    
                    <div  className='grid grid-cols-2'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h1>Name</h1>
                            <p><span className='font-bold'>Chef :</span></p>
                            <p><span className='font-bold'>Supplier :</span></p>
                            <p><span className='font-bold'>Taste :</span></p>
                            <p><span className='font-bold'>Details :</span></p>
                            <p><span className='font-bold'>Price :</span></p>
                        </div>
                    </div>



                    
                </div>




            </section>
        </>
    );
};

export default ViewDetails;