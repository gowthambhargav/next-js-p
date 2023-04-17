import mongoose from 'mongoose'
import React from 'react'
import Services from '@/models/Services'
import { useRouter } from 'next/router';
import { info } from 'autoprefixer';
import Image from 'next/image';
import blog from '../blog';
import Link from 'next/link';
function slugs({servicess,Cart}) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
{/* <span>{servicess.price}</span><br/>
<span>{servicess.title}</span><br/>
<span>{servicess.description}</span><br/>
<span>{}</span><br/> */}
<section className=''>
<div className=''>
<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className=" px-5 py-24 bg-white text-black dark:bg-black dark:text-white">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={servicess.Simg}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-black dark:text-white text-3xl title-font font-medium mb-1">{servicess.title}</h1>
        <div className="flex mb-4">
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a>
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{servicess.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
          {/* <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border border-gray-700 focus:ring-2 focus:ring-green-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-green-500 text-white pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div> */}
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-black dark:text-white">₹{servicess.price}</span>
          
          <Link href={'/Checkout'} className='flex ml-auto'>
          <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={()=>{Cart(servicess.slug)}}>BuyNow</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/*  */}
  
</section>

</div>
<span className='text-white'>
</span>
</section>

    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)

  }
  let services = await Services.findOne({ slug: context.query.slug });
  // console.log(services);
  return {
    props:{ servicess:JSON.parse(JSON.stringify(services))} // will be passed to the page component as props
  }
}


export default slugs