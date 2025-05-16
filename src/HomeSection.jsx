import React from 'react';
import HeroSection from './Component/Hero';
import Card from './Component/CardSection/Card';
import Popularproduct from './Component/PopularProduct/Popularproduct';

const HomeSection = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Card></Card>
            <Popularproduct></Popularproduct>
        </>
    );
};

export default HomeSection;