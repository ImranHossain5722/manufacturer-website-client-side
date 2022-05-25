import React from 'react';
import ManufacturersItems from '../../Components/HomeComponents/ManufacturersItems';
import OurCapability from '../../Components/HomeComponents/OurCapability';
import TopBanner from '../../Components/HomeComponents/TopBanner';
import OurStep from '../../Components/HomeComponents/OurStep'
import BusinessSummery from '../../Components/HomeComponents/BusinessSummery';
import Blogs from '../Blogs/Blogs';
import Reviews from '../../Components/ReviewComponents/Reviews';
const Home = () => {

    return (
        <div className=''>
            <TopBanner></TopBanner>
            <ManufacturersItems></ManufacturersItems>
            <OurCapability></OurCapability>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <OurStep></OurStep>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;