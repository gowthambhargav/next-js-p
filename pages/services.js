import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import mongoose from 'mongoose'
import Services from '@/models/Services'
import { Router, useRouter } from 'next/router'
function services({services,service}) {
  const router = useRouter()
useEffect(() => {
 
service()
if(services === undefined){
router.push('/')
}
setTimeout(() => {
    router.push('/services')
}, 1000);
// console.log(services[0].slug,'------------ser');

}, [])



  




  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    
    <div className="flex flex-wrap ml-8  md:-m-4">
 {services && services.map(function(services){  return(
   <Link key={services.slug} href={`/services/${services.slug}`} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100  rounded-lg dark:bg-black/10 shadow-md dark:shadow-gray-200/10">
          <img className="h-40 rounded rounded-b-none w-full object-cover object-center mb-6" src={`${services.Simg}`} alt="content"/>
          <div className='p-4'>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 dark:text-white">{services.title}</h2>
          <p className="leading-relaxed text-base dark:text-gray-400">{services.description}</p>
        
          </div>
          </div>
      </Link>)})}
      
    </div>
  </div>
</section>
    </div>
  )
}

export default services