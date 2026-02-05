import { useEffect, useState } from "react";
import { data } from "react-router-dom";


const BlogSection = () => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('/Blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <p className='text-center'>Our Blog</p>
            <h2 className='text-4xl text-center'>Latest News</h2>

            <div>
                {
                    blogs?.map(blog=><h2>{blog.title}</h2>)
                }
            </div>
        </div>
    );
};

export default BlogSection;