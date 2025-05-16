import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router';
import CoffeeAddForm from './coffeeAddForm';


const AddCofeeSec = () => {
    return (
        <>
            <section className=" h-screen  overflow-hidden bg-[url('../11.png')] mb-9 ">
                <div className='w-11/12  mx-auto'>
                    <Link to='/' className='flex gap-2 mt-5 hover:text-amber-600 items-center'><FaArrowLeft  /> Back to home</Link>
                </div>
               

                <div className=' w-11/12  mx-auto py-3 px-1.5 mt-2.5 md:mt-5 rounded-2xl md:rounded-3xl md:py-16 md:px-28 bg-[#F4F3F0]'>
                <div className='text-center'>
                    <h1>Add New Coffee</h1>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                    




                    <div>
                        <CoffeeAddForm></CoffeeAddForm>
                    </div>
                </div>




            </section>
        </>
    );
};

export default AddCofeeSec;