import React from 'react';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const PopularCard = ({ coffee }) => {
    const Navigate = useNavigate()

    const { photo, name, price, _id, chef } = coffee;


    const handleDelete =(id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {



                fetch(`https://coffee-server-green.vercel.app/coffee/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json()).then(data => {
                    if(data.deletedCount){
                       Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                }); 
                    };
                })
                // 
            }
        });
    }

    const handledeails = (id) => {

        Navigate(`/viewdetails/${id}`)
    }
    const handleUpdate = (id) => {
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
                <p className='font-bold'>Chef : <span className='font-normal italic'>{chef}</span></p>
                <p className='font-bold'>Price :<span className='font-normal'>{price} </span></p>
            </div>
            <div className='text-right'>
                <div className="join join-vertical gap-2">
                    <button onClick={() => handledeails(_id)} className="btn rounded-xl join-item"><FaEye size={20} /></button>
                    <button onClick={() => handleUpdate(_id)} className="btn rounded-xl join-item"><FaRegEdit size={20} /></button>
                    <button onClick={() => handleDelete(_id)} className="btn rounded-xl join-item"><MdDelete size={20} /></button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;