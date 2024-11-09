'use client';
import React, { useEffect, useState } from 'react';


const PostList:React.FC = () => {
    const [posters, setPosters] = useState<Poster[]>([]); 

    type Poster = {
        id: number;
        src: string;
        alt: string;
      };

      const fetchPosters = async () => {
        try {
          const response = await fetch('/api/getPosters');
          const data = await response.json();
          console.log('Poster data:', data);
          setPosters(data.posters); // 포스터 데이터를 상태에 저장
        } catch (error) {
          console.error('Error fetching posters:', error);
        }
      };
      

      useEffect(() => {
        fetchPosters();
      }, []);
     
    return (
        <div className='flex'>  
         
        </div>
    );
};

export default PostList;