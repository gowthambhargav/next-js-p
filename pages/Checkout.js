import {  useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function Checkout({cart,services,service}) {
  const router = useRouter()
    const [item, setItem] = useState()
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [msg, setMsg] = useState('')
    useEffect(() => {
service()
for (let i = 0; i < services.length; i++) {
    if (services[i].slug === cart[0]) {
      setItem(services[i])
     
    }
    
}

if(cart === undefined){
router.push('/services')
}
    }, [])

    const handelChange = (e)=>{


    }
  return (<>
    <section className="text-black dark:text-white  body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black dark:text-white">Fill your personal details</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name </label>
                        <input onChange={handelChange} value={name} type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" onChange={handelChange} value={email}  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input onChange={handelChange} type="text" value={phone} name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                  {phone &&  <div>
                        <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">OTP</label>
                         <input type="text" value={otp} name="otp" id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[155%] md:w-full sm:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>}
             {  otp &&     <div>
<button className='p-2.5 bg-green-500 rounded'>Verfy</button>
                    </div>}
                </div>
        <div className="p-2 w-full">
          <div className="">
            <label for="message" className=" text-sm text-black dark:text-white">Message</label>
            <textarea id="message" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  md:w-[70%] sm:w-[70%] w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none leading-10  transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">₹{ item &&item.price} Pay</button>
        </div>
<div className='w-full md:-mx-40'>
    <span>Cart</span>
    <div className='w-full'>
        {item && <div className="xl:w-1/2 md:w-1/2 p-4">
        <div className="bg-gray-100  rounded-lg dark:bg-black/10 shadow-md dark:shadow-gray-200/10">
          <img className="h-40 rounded rounded-b-none w-full object-cover object-center mb-6" src={item.Simg} alt="content"/>
          <div className='p-4'>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-white">{item.title}</h2>
          <p className="leading-relaxed text-base dark:text-gray-400">{item.description}</p>
        
          </div>
          </div>
      </div>}
    </div>
</div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Checkout