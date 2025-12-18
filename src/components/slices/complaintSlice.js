import { createSlice } from "@reduxjs/toolkit";

let complaintSlice = createSlice({
    name:"complaint",
    initialState:{complaints:[], singleComplaint:""},
    reducers:{
        addComplaint(state,action) {
            state.complaints.push(action.payload);
        },
        deleteComplaint(state,action){
            let data = state.complaints.filter(
                (value) => value.id !== action.payload
            );
            console.log(data)
            state.complaints=data
        },
        editComplaints(state,action){
            let data = state.complaints.filter(
                (value) => value.id !== action.payload
            );

            let singleComplaint = state.complaints.find(
                (value) => value.id === action.payload
            );
            state.complaints = data;
            state.singleComplaint = singleComplaint;
            
        },

    },
});

export let{addComplaint, deleteComplaint,editComplaints} = complaintSlice.actions;
export default complaintSlice.reducer