import React, { useEffect, useState } from 'react'
import { ProductCards } from './productsSection/ProductCards'
import { MyCarousel } from './MyCarousel'
import { SocialContainer } from './socialContainer'
import { MyFooter } from './Footer'
import { MySideBar } from './sideBar/MySideBar'
import { jwtDecode } from 'jwt-decode'
import { useUserContext } from '../../../context/UserContext'
import { Outlet } from 'react-router-dom'
import { ProductServices } from '../../../services/products'

export const Home = () => {
    const { setUser } = useUserContext()
    const [products, setProducts] = useState([])
    const productServices = new ProductServices()
    useEffect(() => {
        const checkLogin = () => {
            const token = localStorage.getItem("token")
            if (!token) return
            const loggedUser = jwtDecode(token)
            setUser(loggedUser)
        }
        
        const getProducts = async () => {
            const response = await productServices.getAllProducts()
            setProducts(response.data)
        }
        checkLogin()
        getProducts()
    }, [])
    return (
        <>
            <MyCarousel />
            <SocialContainer />
            <div className='block sm:flex'>
                <MySideBar />
                <Outlet />
            </div>
            <MyFooter />
        </>
    )
}