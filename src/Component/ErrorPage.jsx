import React from 'react';
import Header from './Header';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa6';
import img  from './../assets/images/404/404.gif'
import Footer from './Footer/Footer';

const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <section className="   bg-[url('../11.png')] mb-9 ">
                <div className='w-11/12  mx-auto'>
                    <Link to='/' className='flex gap-2 mt-5 hover:text-amber-600 items-center justify-center'><FaArrowLeft  /> Back to home</Link>
                </div>
               

                <div className=' w-11/12  mx-auto rounded-2xl md:rounded-3xl flex justify-center'>
                    <img  src={img} alt="" />
                </div>

            </section>

            <Footer></Footer>
        </>
    );
};

export default ErrorPage;