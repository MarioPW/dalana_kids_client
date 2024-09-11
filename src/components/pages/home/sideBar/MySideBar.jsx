import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { RiAdminLine } from "react-icons/ri";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiInbox, HiShoppingBag, HiTable, HiUser, HiMenu } from "react-icons/hi";
import { CategoriesService } from "../../../../services/categories";
import { useUserContext } from "../../../../context/UserContext";

export function MySideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState(false);
    const { user } = useUserContext()

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }
    const categoriesService = new CategoriesService();

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await categoriesService.getAllCategories();
                if (res.length > 0) {
                    setCategories(res)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getCategories();
    }, [user])


    return (
        <div>
            <button
                onClick={toggleSidebar}
                className="p-2 top-16 left-0 sm:mt-4  text-orange-500 bg-transparent rounded-md md:hidden fixed sm:left-4 z-50">
            
                <HiMenu className="w-6 h-6" />
            </button>
            <div
                className={`fixed top-16 left-0 h-full z-40 transition-transform transform md:top-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:relative md:block`}>
            
                <Sidebar aria-label="Sidebar with multi-level dropdown example">
                    <Sidebar.Items className="pt-6">
                        <Sidebar.ItemGroup>
                            {user.role === "admin" && <Link
                                className="flex items-center px-3 py-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                to="/dashboard">
                                <RiAdminLine className="mr-2"/>Dashboard</Link>}
                            <Sidebar.Collapse icon={HiShoppingBag} label="Categorías">
                                {categories && categories.map((category) => (
                                    <Sidebar.Item key={category.id} href="#">{category.name}</Sidebar.Item>
                                ))}
                            </Sidebar.Collapse>
                            <Sidebar.Item href="#" icon={HiInbox}>
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiShoppingBag}>
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                Sign In
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </div>
    );
}
