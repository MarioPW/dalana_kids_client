import { Link } from 'react-router-dom'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LoginModal } from '../../login_register/LoginModal'
import { useUserContext } from '../../../../context/UserContext';
import { ShopingCart } from './ShopingCart';
import { ProfileDropdown } from './ProfileDropdown'
import { useEffect } from 'react';


export const MyNavbar = () => {
  const { user } = useUserContext()
  const navigation = [
    { name: 'Home', href: '/', color: 'bg-orange-500', current: false },
  ]
  
  const classNames = (...classes) => {
    classes.filter(Boolean).join(' ')}
  useEffect(() => {}, [user]);

  return (
    <div className='fixed top-0 z-50 w-full mx-auto'>
      <Disclosure as="nav" className="mx-auto bg-yellow-300 rounded-b-md max-w-7xl">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex items-center justify-center flex-1 sm:justify-start">
                  <a to="/" className="flex items-center flex-shrink-0">
                    <img
                      className="w-auto rounded-md h-14"
                      src="assets/dalanaKidsLogo.png"
                      alt="Dalana Kids Logo"
                    />
                  </a>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current ? 'bg-white-600 text-white' : `${item.color} text-white hover:bg-green-500 hover:text-white`,
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {user && <ShopingCart />}
                  {/* Profile dropdown */}
                 {user ? <ProfileDropdown user={user} /> : <LoginModal />}
                  
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                      item.current ? 'bg-blue-800 text-white' : 'text-gray-300 hover:bg-blue-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
