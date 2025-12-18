import React from "react";
import Counter from "./components/counter/Counter";
import Complaint from "./components/complaints/Complaint";
import Courses from "./components/courses/Courses";

const App = () => {
  return (
    <div>
      <Counter />
      <Complaint />
      <Courses />
    </div>
  );
};

export default App;