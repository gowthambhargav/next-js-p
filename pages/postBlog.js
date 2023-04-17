import React, { useState } from 'react'
import dynamic from 'next/dynamic';


const MyEditer = dynamic(()=> import('../components/Texteditor'),{
    ssr:false
})

function postBlog() {
    const [value, setValue] = useState("");
  return (
    <div>postBlog

        <div>
            <MyEditer/>
        </div>
    </div>
  )
}

export default postBlog