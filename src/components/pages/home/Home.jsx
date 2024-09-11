import React from 'react'
import { ProductCards } from './ProductCards'
import { MyCarousel } from './MyCarousel'
import { SocialContainer } from './socialContainer'
import { MyFooter } from './Footer'
import { MySideBar } from './sideBar/MySideBar'


export const Home = () => {
    return (
        <>
            <MyCarousel />
            <SocialContainer />
            <div className='block sm:flex'>
                <MySideBar />
                <ProductCards />
            </div>
            <MyFooter />
        </>
    )
}