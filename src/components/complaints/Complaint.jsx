/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComplaint, deleteComplaint, editComplaints } from '../slices/complaintSlice';

const Complaint = () => {
    let [complaintData, setComplaintData] = useState({
        id: crypto.randomUUID(),
        complaintValue: "",
    });
    let complaints = useSelector((state) => state.complaint.complaints);
    let singleComplaint = useSelector((state) => state.complaint.singleComplaint)
    let dispatch = useDispatch();
    let handleChange = (e) => {
        let { name, value } = e.target;
        setComplaintData({ ...complaintData, [name]: value });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComplaint(complaintData));
        console.log(complaints);
        setComplaintData({
            id: crypto.randomUUID(),
            complaintValue: "",
        });

    }
    useEffect(() => {
        setComplaintData({
            ...complaintData,
            complaintValue: singleComplaint.complaintValue,
        });
    }, [complaintData, singleComplaint]);
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor=''>Complaint</label>
                <input
                    type="text"
                    value={complaintData.complaintValue}
                    onChange={handleChange}
                    name='complaintValue'
                />
                <button>Submit</button>
            </form>

            <section>
                {complaints.map((value) => {
                    return (
                        <article>
                            <h4>{value.complaintValue}</h4>
                            <button onClick={() => dispatch(editComplaints(value.id))}
                            >Edit</button>
                            <button onClick={() => dispatch(deleteComplaint(value.id))}>
                                Delete
                            </button>
                        </article>
                    )
                })}
            </section>

        </div>
    )
}

export default Complaint