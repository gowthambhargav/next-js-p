import { Fragment, use, useEffect, useRef, useState } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import {
  ArrowPathIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Navbar({ logOut, user, fetchUderInfo }) {
  const [mount, setMount] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  useEffect(() => {
    setMount(true)
  }, [])



  const handelMode = () => {
    if (!mount) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'dark') {
      return (
        <button className='py-2 px-2 bg-slate-200 rounded dark: text-black items-center' onClick={() => setTheme('light')}>
          <BsFillSunFill />
        </button>


      )
    } else {
      return (
        <button className='py-2 px-2 bg-slate-200 rounded dark: text-black items-center' onClick={() => setTheme('dark')}>
          <BsFillMoonFill />
        </button>
      )
    }

  }
  return (
    <Popover className="relative bg-white dark:bg-black/5 shadow-lg shadow-gray-50 dark:shadow-gray-800">
      <div className="mx-auto px-6">
        <div className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={'/'}>
              <h1 className="ml-3 text-xl dark:text-white">Your Company</h1>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div as="nav" className="hidden space-x-10 md:flex">
            <Link href={'/'}>
              <span className="text-base font-medium text-gray-500 hover:border-b-2 border-b-green-500 border-spacing-2">
                Home
              </span>
            </Link>

            <Link href={'/blog'}>
              <span className="text-base font-medium text-gray-500 hover:border-b-2 border-b-green-500 border-spacing-2">
                Blog
              </span>
            </Link>
            <Link href={'/services'}>
              <span className="text-base font-medium text-gray-500 hover:border-b-2 border-b-green-500 border-spacing-2">
                Services
              </span>
            </Link>
            <Link href={'/contact'}>
              <span className="text-base font-medium text-gray-500 hover:border-b-2 border-b-green-500 border-spacing-2">
                Contact
              </span>
            </Link>
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          
            <div>{handelMode()}

            </div>

            {user.value ? <div className=''>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://i.ibb.co/5smBjfD/profile-user.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute dark:bg-black text-gray-700 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={'/user/profile'}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a onClick={logOut}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div> : <Link href={'/login'}>
              <span className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm">Login</span>

            </Link>}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 bg-black dark:bg-black dark:text-white transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white dark:bg-black shadow-lg ring-1 dark:text-white ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className='ml-3 text-xl dark:text-white'>Our Company</span>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-5">

                  <Link href={'/'} className='ml-3 text-base font-medium text-gray-900 dark:text-white'><span>Home</span></Link>
                  <Link href={'/blog'} className='ml-3 text-base font-medium text-gray-900 dark:text-white'><span>Blog</span></Link>
                  <Link href={'/services'} className='ml-3 text-base font-medium text-gray-900 dark:text-white'><span>Services</span></Link>
                  <Link href={'/contact'} className='ml-3 text-base font-medium text-gray-900 dark:text-white'><span>Contactus</span></Link>
                  {user.value ? <Link href={'/user/profile'} className='ml-3 text-base font-medium text-gray-900 dark:text-white'><span>Your Profile</span></Link>:<div className='hidden'>ggg</div>}
                
          

          
               
                </nav>
                {user.value ? 
                
                <div className='-mt-2'>
                  <br/>
                  <Link href={'/'} onClick={logOut} className='ml-3 text-base font-medium text-gray-900 dark:text-white'><span>Logout</span></Link>
              
            </div> : <Link href={'/login'}>
              <span className="mt-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm">Login</span>

            </Link>}

            <div className='mt-10'>{handelMode()}
</div>
              </div>
            </div>
            {/* <div>
              <button>Enable dark mode</button>
            </div> */}
            {/* <div className="py-6 px-5">
              <div>

              </div>
            </div> */}
          </div>
          {/* {user.value} */}
        </div>
      </Transition>
    </Popover>
  )
}


export default Navbar