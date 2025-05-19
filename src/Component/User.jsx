import React from 'react';


const User = () => {



    const handleUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };

        fetch('https://coffee-server-murex.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        }).then(res => res.json()).then(data => {
            console.log('data after creating user into db', data);
        })
    }
    return (
        <>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleUser} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="Name" />


                        <label className="label">Email</label>
                        <input type="text" className="input" name='email' placeholder="Email" />


                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>


        </>
    );
};

export default User;