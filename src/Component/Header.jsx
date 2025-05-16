import React from 'react';
import logo from '../assets/images/more/logo1.png'
import bg from '../assets/images/more/15.jpg'

const Header = () => {
    return (
        <>
            <header className="relative py-4 bg-no-repeat bg-cover bg-center w-full ">
                
                <img
                        src={bg}
                        alt="Coffee beans in a cup"
                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                    />
                <div className="w-11/12 relative mx-auto px-4 flex items-center justify-center z-10">
                    {/* Logo */}
                    

                        <img
                            src={logo}
                            alt="Espresso Emporium Logo"
                            className="h-8 w-8 mr-3"
                        />

                        {/* Site name */}
                        <h1 className="text-white text-xl font-serif ">
                            Espresso Emporium
                        </h1>

                </div>
            </header>
        </>
    );
};

export default Header;