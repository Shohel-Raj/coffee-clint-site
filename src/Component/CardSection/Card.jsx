import React, { use } from 'react';
// import { useLoaderData } from 'react-router';
import SingleCard from './SingleCard';


const dataPromise=fetch('/Carddata.json').then(res=>res.json())

const Card = () => {

    const data=use(dataPromise)


    return (
        <div className='bg-[#ECEAE3]'>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                data.map(card=><SingleCard key={card.id} card={card}></SingleCard>)
            }

            </div>
            
        </div>
    );
};

export default Card;