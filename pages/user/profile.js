import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react'
const jwt = require('jsonwebtoken');
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import mongoose from 'mongoose';
import User from '@/models/User';
import SideBar from '@/components/SideBar';





function Profile({ userInfo, fetchUderInfo }) {



  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [userEma, setuserEma] = useState('')
  const [usert, setUsert] = useState();
  const [userInfo2, setUserInfo2] = useState({})
  useEffect(() => {
    const token = localStorage.getItem('ULI')
    const jw = jwt.decode(token)
    let { email } = jw

    setuserEma(email)

    if (!token) {
      router.push('/')
    }
    fetchUderInfo()
    // return async()=>{
    //   const token = localStorage.getItem('ULI')
    //   const jw =  jwt.decode(token);
    //   const data = jw.email
    //   let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/GetUser/`)
    //   const response = await res.json();
    //   const d = response.userInfo
    //   for (let i = 0; i < d.length; i++) {
    //     const element = d[i].email;
    //    if (element === data) {

    //    let g =  JSON.stringify(d[i])
    //     localStorage.setItem("UINFO",g)
    //     setUserInfo2(d[i])
    //    }
    //    if(userInfo2 !=null || userInfo2 != undefined){
    // localStorage.removeItem('UINFO')
    //    }
    //   }
    //   console.log(JSON.stringify(userInfo2),'--------------- from profile.js');
    // }

  }, [])




  // const fetchUderInfo2 =()=>{
  //   console.log(fetchUderInfo);
  // }

  const router = useRouter()
  const { profile } = router.query


  return (<>


    <div>
      {/* <SideBar /> */}
      <div className='mt-[5rem] ml-[1rem] md:ml[15rem] w-[62vw]'>
        <div>
          <img src="https://i.ibb.co/5smBjfD/profile-user.png" className='rounded-full w-16 h-16' />
          <span className='dark:text-white ml-[5rem] flex -mt-[2.3rem] text-[1.7rem] overflow-clip'>{userInfo.username}</span>
        </div>
        <span className='w-full border flex mt-8'></span>
        <section className=''>


{/* <!-- Main modal --> */}
<div id="updateProductModal"   className="justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div className="p-4 w-full  h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div className="p-4 rounded-lg  sm:p-5">
          
            {/* <!-- Modal body --> */}
            <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">first Name</label>
                        <input type="text" name="name" id="name" value={userInfo.username} className="bg-gray-50 cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ex. Apple iMac 27&ldquo;"/>
                    </div>
                    <div>
                        <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name </label>
                        <input type="text" name="brand" id="brand" value="Google" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ex. Apple"/>
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" value={userInfo.email} name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$299"/>
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" value="399" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$299"/>
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                        <input type="text" value="399" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$299"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
        </section>
      </div>
    </div>
  </>
  )
}

export default Profile