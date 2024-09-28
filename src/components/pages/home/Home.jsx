import React, { useEffect, useState } from 'react'
import { MyCarousel } from './MyCarousel'
import { SocialContainer } from './socialContainer'
import { MyFooter } from './Footer'
import { MySideBar } from './sideBar/MySideBar'
import { jwtDecode } from 'jwt-decode'
import { useUserContext } from '../../../context/UserContext'
import { Outlet } from 'react-router-dom'
import { ProductServices } from '../../../services/products'
import { Hcarousel } from './horizontalCarousel/Hcarousel'
import { ColorfulWord } from '../../utilities/ColorfulWord'

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
            <div className='w-full'>
                <Hcarousel />
                <div className='flex-col block sm:flex'>
                   <div className="flex items-center justify-center w-full py-2 my-6 bg-yellow-100" >
                        <ColorfulWord word="CATÁLOGO DE PRODUCTOS" size="text-xl sm:text-3xl" />
                    </div>
                    <div className='sm:flex'>
                    <MySideBar />
                    <Outlet />
                    </div>
                    
                </div>
            </div>
            <MyFooter />
        </>
    )
}