import { createSlice } from "@reduxjs/toolkit";

let courseSlice = createSlice({
    name:"course",
    initialState:{courses:[], singleCourse:""},
    reducers:{
        addCourse(state,action) {
            state.courses.push(action.payload);
        },
        deleteCourse(state,action){
            let data = state.courses.filter(
                (value) => value.id !== action.payload
            );
            console.log(data)
            state.courses=data
        },
        editCourse(state,action){
            let data = state.courses.filter(
                (value) => value.id !== action.payload
            );

            let singleCourse = state.courses.find(
                (value) => value.id === action.payload
            );
            state.courses = data;
            state.singleCourse = singleCourse;
            
        },

    },
});

export let{addCourse, deleteCourse,editCourse} = courseSlice.actions;
export default courseSlice.reducer