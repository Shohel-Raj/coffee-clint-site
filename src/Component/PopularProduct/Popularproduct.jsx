import React from 'react';
import PopularCard from './PopularCard';

const Popularproduct = () => {
    return (
        <div className="bg-[url('../1.png')] bg-no-repeat bg-cover my-6">
            <div className='w-11/12 mx-auto text-center space-y-2.5'>
                <p>--- Sip & Savor ---</p>
                <h1 className='text-2xl font-bold'>Our Popular Products</h1>
                <button className="btn btn-sm btn-soft bg-[#e3b577]">Add Coffee</button>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 mt-8'>
                <PopularCard></PopularCard>
                <PopularCard></PopularCard>
                <PopularCard></PopularCard>
                <PopularCard></PopularCard>
                <PopularCard></PopularCard>
            </div>
            
        </div>
    );
};

export default Popularproduct;