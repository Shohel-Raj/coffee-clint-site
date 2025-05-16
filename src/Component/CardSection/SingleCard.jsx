import React from 'react';

const SingleCard = ({card}) => {
    const {img,title,description}=card;


    return (
        <>
                <div className='p-3 md:p-6 space-y-2'>
                    <div className='w-[50px]'>
                        <img className='w-full' src={img} alt="icon" />
                    </div>
                    <div className='space-y-1.5'>
                        <h1 className='text-3xl'>{title}</h1>
                        <p className='text-[16px] text-[#1b1a1a]'>{description}</p>
                    </div>
                </div>
        </>
    );
};

export default SingleCard;