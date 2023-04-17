import {React,useState, useRef, useMemo} from 'react'
import JoditEditor from 'jodit-react';
function Texteditor() {
  const editor = useRef(null); 
  // const editor = Jodit.make("#editor");
  const [content, setContent] = useState("");
const handelsub = async ()=>{
  let a = [content]
  const data = {slug:"6416bb8f8f85493c782829e0" ,description: a };

let res = await   fetch(`${process.env.NEXT_PUBLIC_HOST}/api/UpdateBlog`, {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  let response = await res.json();
  console.log(response);


}
  return (
    <div className='w-[90vw] mx-auto'>
      <JoditEditor className='dark:text-black' ref={editor} value={content} onChange={newContent =>setContent(newContent)}/>
      <div className='dark:text-white'>
        {content}</div> 
        <div className="">
          <button className='p-10 bg-slate-600 m-5' onClick={handelsub}>Submit</button>
        </div>
    </div>
  )
}

export default Texteditor