import React from 'react';
import HeroSection from './Component/Hero';
import Card from './Component/CardSection/Card';
import Popularproduct from './Component/PopularProduct/Popularproduct';
import InstaPost from './Component/InstPost/instaPost';

const HomeSection = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Card></Card>
            <Popularproduct></Popularproduct>
            <InstaPost></InstaPost>
        </>
    );
};

export default HomeSection;