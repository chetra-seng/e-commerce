import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com";
export const AxiosClient = axios.create({baseURL:url})
export default function HomeCard() {
    const [posts , setPosts] = useState([])
    const getPost =async () =>{
        const {data} =await AxiosClient.get('/posts')
        setPosts(data)
    }
    
    useEffect(() => {
      getPost();
    }, []);
  
    
  return (
    <>
     <div className="bg-red-400 container mx-auto">
      
        {posts.map((post :any ) => {
          return (
            <div className='flex justify-center'>
              {post.id} ({post.title})
            </div>
          );
        })}
      
    </div>

    </>
  )
}
