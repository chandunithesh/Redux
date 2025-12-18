import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/CounterSlice.js";
import complaintSlice from "../slices/complaintSlice.js";
import courseSlice from "../slices/courseSlice.js";

let store = configureStore({
    reducer:{
        counter: counterSlice,
        complaint: complaintSlice,
        course: courseSlice,
    }
});

export default store;