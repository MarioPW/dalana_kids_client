import React from 'react'
import { MyNavbar } from './MyNavbar'
import { ProductCards } from './ProductCards'
import { MyCarousel } from './MyCarousel'
import { SocialContainer } from './socialContainer'
import { MyFooter } from './Footer'


export const Home = () => {
    return (
        <>
            <MyCarousel />
            <SocialContainer />
            <ProductCards />
            <MyFooter />
        </>
    )
}