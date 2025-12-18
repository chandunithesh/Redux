/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, deleteCourse, editCourse } from '../slices/courseSlice'
import './Courses.css'

let Courses = () => {
    let [courseData, setCourseData] = useState({
        id: crypto.randomUUID(),
        courseValue: "",
        courseName: "",
        instructor: "",
        duration: "",
    })

    let courses = useSelector((state) => state.course.courses)
    let singleCourse = useSelector((state) => state.course.singleCourse)
    let dispatch = useDispatch()

    let handleChange = (e) => {
        let { name, value } = e.target
        setCourseData({ ...courseData, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCourse(courseData))
        setCourseData({
            id: crypto.randomUUID(),
            courseValue: "",
            courseName: "",
            instructor: "",
            duration: "",
        })
    }

useEffect(() => {
    if (!singleCourse) return;

    setCourseData({
        id: singleCourse.id,
        courseValue: singleCourse.courseValue,
        courseName: singleCourse.courseName,
        instructor: singleCourse.instructor,
        duration: singleCourse.duration,
    });
}, [singleCourse]);


    return (
        <div>
              <form onSubmit={handleSubmit} className="form-container">
  <label>Course Code</label>
  <input
    type="text"
    name="courseValue"
    value={courseData.courseValue}
    onChange={handleChange}
  />

  <label>Course Name</label>
  <input
    type="text"
    name="courseName"
    value={courseData.courseName}
    onChange={handleChange}
  />

  <label>Instructor</label>
  <input
    type="text"
    name="instructor"
    value={courseData.instructor}
    onChange={handleChange}
  />

  <label htmlFor="duration">Duration</label>
<input
  id="duration"
  type="text"
  name="duration"
  value={courseData.duration}
  onChange={handleChange}
/>


  <button>Submit</button>
</form>

            <section>
                {courses.map((value) => (
                    <article key={value.id}>
                        <h4>{value.courseName}</h4>
                        <p>Code: {value.courseValue}</p>
                        <p>CourseName: {value.courseName}</p>
                        <p>Instructor: {value.instructor}</p>
                        <p>Duration: {value.duration}</p>

                        <button onClick={() => dispatch(editCourse(value.id))}>
                            Edit
                        </button>
                        <button onClick={() => dispatch(deleteCourse(value.id))}>
                            Delete
                        </button>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default Courses
