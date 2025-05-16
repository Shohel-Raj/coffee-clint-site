import React from "react";
import banner from '../assets/images/more/3.png'

const HeroSection = () => {
    return (
        <>
            <section className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">

                <img
                    src={banner}
                    alt="Coffee beans in a cup"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />

                <div className="grid grid-cols-3">
                    <div>


                    </div>
                    <div className="col-span-2">
                        <div className="relative z-10  max-w-xl px-4">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Would you like a <span className="text-amber-400">Cup of Delicious Coffee?</span>
                            </h1>
                            <p className="text-gray-300 mb-6">
                                It's coffee time — Sip & Savor — Relaxation in every sip! Get the nostalgic touch and true companions of every moment! Enjoy the best, trust us! Aromatic and make them memorable.
                            </p>
                            <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-6 rounded transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>




            </section>
        </>
    );
};

export default HeroSection;
