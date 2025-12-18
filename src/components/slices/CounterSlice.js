import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
    name:"counter",
    initialState:{value:0}, //always should be in object
    reducers:{//reducer is also in object
        increment(state){
            state.value += 1;
        },
        decrement(state){
            state.value -= 1;
        }
    }
});

export let{increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducer;