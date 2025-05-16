import React from 'react';

import img1 from '../../assets/images/cups/Rectangle 9.png'
import img2 from '../../assets/images/cups/Rectangle 10.png'
import img3 from '../../assets/images/cups/Rectangle 11.png'
import img4 from '../../assets/images/cups/Rectangle 12.png'
import img5 from '../../assets/images/cups/Rectangle 13.png'
import img6 from '../../assets/images/cups/Rectangle 14.png'
import img7 from '../../assets/images/cups/Rectangle 15.png'
import img8 from '../../assets/images/cups/Rectangle 16.png'



const InstaPost = () => {
    return (
        <>
            <div className=" my-6">
                <div className='w-11/12 mx-auto text-center space-y-2.5'>
                    <p>Follow Us Now</p>
                    <h1 className='text-2xl font-bold'>Follow on Instagram</h1>
                </div>
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-7 gap-2 mt-8'>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img1} alt="" />
                    </div>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img2} alt="" />
                    </div>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img3} alt="" />
                    </div>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img4} alt="" />
                    </div>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img5} alt="" />
                    </div>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img6} alt="" />
                    </div>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img7} alt="" />
                    </div>
                    <div className='rounded-2xl overflow-hidden w-full'>
                        <img className='w-full' src={img8} alt="" />
                    </div>

                </div>

            </div>
        </>
    );
};

export default InstaPost;