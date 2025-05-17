import React, { useState } from 'react';
import PopularCard from './PopularCard';
import { Link, useLoaderData } from 'react-router';

const Popularproduct = () => {
    const coffeedata=useLoaderData()
    const [coffees,setCoffe]=useState(coffeedata)

    return (
        <div className="bg-[url('../1.png')] bg-no-repeat bg-cover my-6">
            <div className='w-11/12 mx-auto text-center space-y-2.5'>
                <p>--- Sip & Savor ---</p>
                <h1 className='text-2xl font-bold'>Our Popular Products</h1>
                <Link to='/addCoffee' className="btn btn-sm btn-soft bg-[#e3b577]">Add Coffee</Link>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 mt-8'>
                {
                    coffees.map(coffee=><PopularCard key={coffee._id} coffee={coffee}></PopularCard>)
                }
            </div>
            
        </div>
    );
};

export default Popularproduct;