import React, { useEffect } from 'react'
import { ProductCards } from './ProductCards'
import { MyCarousel } from './MyCarousel'
import { SocialContainer } from './socialContainer'
import { MyFooter } from './Footer'
import { MySideBar } from './sideBar/MySideBar'
import { jwtDecode } from 'jwt-decode'
import { useUserContext } from '../../../context/UserContext'

export const Home = () => {
    const { setUser } = useUserContext()
    useEffect(() => {
        const checkLogin = () => {
            const token = localStorage.getItem("token")
            if (!token) return
            const loggedUser = jwtDecode(token)
            setUser(loggedUser)
        }
        checkLogin()
    }, [])
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