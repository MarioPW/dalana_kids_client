import React from 'react'
import { MyNavbar } from './MyNavbar'
import { ProductCards } from './ProductCards'
import { MyCarousel } from './MyCarousel'
import { SocialContainer } from './socialContainer'


export const Home = () => {
    return (
        <>
            <MyCarousel />
            <SocialContainer />
            <ProductCards />
        </>
    )
}