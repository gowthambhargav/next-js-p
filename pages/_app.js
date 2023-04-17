import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import mongoose from 'mongoose'
import Services from '@/models/Services'
const jwt = require('jsonwebtoken');


export default function App({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const [progress, setProgress] = useState(0);
  const [userInfo, setUserInfo] = useState({})
  const [services, setServices] = useState()
  const [Blogs, setBlogs] = useState();
  const [cart, setCart] = useState();
  const router = useRouter();
  useEffect(() => { 
    router.events.on('routeChangeStart', ()=>{
     setProgress(40)
   })
   router.events.on('routeChangeComplete', ()=>{
     setProgress(100)
   })
   const token = localStorage.getItem('ULI');
   if (token) {
     setUser({value:token})
   }
   service()
   blog()
 }, [router.query])
 const logOut =()=>{
  localStorage.removeItem('ULI');
  localStorage.removeItem('UINFO');
  setUser({value:null})
  router.push('/')
}
const fetchUderInfo = async ()=>{
  const token = localStorage.getItem('ULI')
  const jw =  jwt.decode(token);
  const data = jw.email
  let res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/GetUser/`)
  const response = await res.json();
  const d = response.userInfo
  for (let i = 0; i < d.length; i++) {
    const element = d[i].email;
   if (element === data) {
   
   let g =  JSON.stringify(d[i])
    localStorage.setItem("UINFO",g)
    setUserInfo(d[i])
   
   }
   if(userInfo !=null || userInfo != undefined){
localStorage.removeItem('UINFO')
   }
  }
  // console.log(userInfo.email,userInfo.username,'--------------- from app.js');
}
// Get services
const service = async ()=>{
  const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Getservices`)
  let res = await  data.json()
  // console.log(res.services,'----appjs');
  setServices(res.services)
}
const blog = async ()=>{
  const data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/GetBlogs`)
  let res = await  data.json()
  // console.log(res.Blog,'----appjs');
  setBlogs(res.Blog)
}


const Cart = (a)=>{
let i = [a]
setCart(i)
}

// http://localhost:3000/api/GetBlogs
  return <>
  <ThemeProvider attribute='class'>
         
        <LoadingBar
        color='#22c55e'
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}/> 
        <Navbar  logOut={logOut} user={user} userInfo={userInfo} fetchUderInfo ={fetchUderInfo } />
  <Component fetchUderInfo={fetchUderInfo } logOut={logOut} Cart={Cart}   cart={cart} service={service} services={services}  Blogs={Blogs} userInfo={userInfo}  {...pageProps} />
  <Footer/>
  </ThemeProvider>
  </>
}
