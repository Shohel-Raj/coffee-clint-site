import React from 'react';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router';

const PopularCard = ({coffee}) => {
    const Navigate=useNavigate()

    const {photo,name,price,_id,chef}=coffee;


    const handleDelete=(id)=>{
        alert('delete',id)
    }

    const handledeails=(id)=>{

        Navigate(`/viewdetails/${id}`)
    }
    const handleUpdate=(id)=>{
        console.log(id);
        Navigate(`/updateDetails/${id}`)
    }
    return (
        <div className='grid grid-cols-5 bg-[#f5f4f1] p-7 rounded-2xl place-content-between items-center'>
            <div className='col-span-2'>
                <img src={photo} alt="" />
            </div>
            <div className='col-span-2 space-y-4'>
                <h1 className='font-bold'>Name : {name}</h1>
                <p  className='font-bold'>Chef : <span className='font-normal italic'>{chef}</span></p>
                <p className='font-bold'>Price :<span className='font-normal'>{price} </span></p>
            </div>
            <div className='text-right'>
                <div className="join join-vertical gap-2">
                    <button onClick={()=>handledeails(_id)} className="btn rounded-xl join-item"><FaEye size={20}/></button>
                    <button onClick={()=>handleUpdate(_id)} className="btn rounded-xl join-item"><FaRegEdit size={20} /></button>
                    <button onClick={()=>handleDelete(_id)} className="btn rounded-xl join-item"><MdDelete size={20}/></button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;