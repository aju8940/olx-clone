/* eslint-disable react/prop-types */
import { createContext,useState } from "react";
import React from 'react';

export const PostContext = createContext(null)

function Post({children}){
    const [postDetail,setPostDetail] = useState()

    return(
        <PostContext.Provider value={{postDetail,setPostDetail}}>
            {children}
        </PostContext.Provider>
    )

}

export default Post