import React from 'react';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const PopularCard = () => {
    return (
        <div className='grid grid-cols-3 bg-[#f5f4f1] p-7 rounded-2xl justify-center'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1 className='font-bold'>Name</h1>
                <p><span className='font-bold'>Chef :</span></p>
                <p><span className='font-bold'>Price :</span></p>
            </div>
            <div>
                <div className="join join-vertical gap-2">
                    <button className="btn rounded-xl join-item"><FaEye size={20}/></button>
                    <button className="btn rounded-xl join-item"><FaRegEdit size={20} /></button>
                    <button className="btn rounded-xl join-item"><MdDelete size={20}/></button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;