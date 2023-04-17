import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import mongoose from 'mongoose';
import AddBlog from '../../models/Blog'


function slug(blog) {
  const router = useRouter()
  const { slug } = router.query;

  useEffect(() => {

  }, [])
  const html = blog.blog.description[0]
  
  return (
    <div className='dark:text-white overflow-hidden'>
    <div className="md:mx-auto ml-4 mr-3 mt-10 md:w-[59vw] w-[93%]">
        {/* <h1 className='text-3xl font-semibold'>{blog.blog.title}</h1> */}
        <div className='mt-4' dangerouslySetInnerHTML={{__html:html}}>
  
        </div>
    </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)

  }
  let Blogs = await AddBlog.findOne({ slug: context.query.slug });
  // console.log(Blogs);
  return {
    props:{ blog:JSON.parse(JSON.stringify(Blogs))} // will be passed to the page component as props
  }
}
export default slug