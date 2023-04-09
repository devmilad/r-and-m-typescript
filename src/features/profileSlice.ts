
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { profile } from 'console'

type userType={
  id:number
  name?:string
  image?:string
}


export interface ProfileState {
 value:userType[]
}

const initialState: ProfileState = {
    value:[],
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    addProfile:(state,action:PayloadAction<userType>)=>{
        if (state.value.length >9) {
            state.value.splice(0,1)
            if (action.payload.name !== undefined) {
                state.value.push(action.payload)
            }
            return
        }else{
          if (action.payload.name !== undefined) { 
            state.value.push(action.payload)
        }
        }
        
    }
  },
})


export const { addProfile} = profileSlice.actions

export default profileSlice.reducer