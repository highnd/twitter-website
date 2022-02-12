import React from 'react'
import Post from './Post'

export default function Postlist({data}) {
    return (
        <div>

            {data.map(item=> <Post data={item}/>)}
            
                    
              
        </div>
    )
}
