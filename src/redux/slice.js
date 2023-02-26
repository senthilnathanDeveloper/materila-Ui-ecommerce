import { createSlice } from "@reduxjs/toolkit";
import images from '../assets/images/pexels-essow-1042143.jpg'

export const slice = createSlice({
    name:"slice",
    initialState:{
        slice:[
            {
                id:"1",
                title:"Phone",
                description:"An apple mobile which is nothing like apple",
                price:50000,
                brand:"Apple",
                category:"smartPhone",
                imageUrl:images
            },
            {
                id:"2",
                title:"Phone",
                description:"An samsung mobile which is nothing like apple",
                price:50000,
                brand:"Samsung",
                category:"smartPhone",
                imageUrl:images
            },
            {
                id:"3",
                title:"Phone",
                description:"An Oppo mobile which is nothing like apple",
                price:50000,
                brand:"Oppo",
                category:"smartPhone",
                imageUrl:images
            }
        ],
    },
    reducers:{   
        postDataSuccess(state,action) {
            console.log("action",action)
            state?.slice?.push(action?.payload);
        },
    }
})

export const {postDataSuccess} = slice?.actions

export default slice.reducer