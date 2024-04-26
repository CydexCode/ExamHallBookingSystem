import { useEffect, useState } from "react"
import { closeModal, entry, updateAppointmentDrawingHall } from "./Lib"

export default function Edit(props){

    const [done_, setDone_] = useState(false)
    const [deleted_, setDeleted_] = useState(false)
    const [importance, setImportance] = useState(0)
    const [data, setData] = useState({})

    const editApp =(e)=> {
        const name_ = e.target.name
        let v_ = e.target.value

        if(name_ === "done"){
            v_ = e.target.checked
            setDone_(v_)
        }

        if(name_ === "deleted"){
            v_ = e.target.checked
            setDeleted_(v_)
        }

        if(name_ === "date"){
            v_ = new Date(v_)
        }

        if(name_ === "levelOfImportance"){
            v_ = Number(v_)
            setImportance(v_)
        }

        entry[name_] = v_
    }

    const updateApp = ()=>{
        updateAppointmentDrawingHall(entry).then(r =>{
            console.log("Updated successfully: ", r)
            props.refreshApp(Math.random() * 248 * Math.random())
        })
        .catch(e=>console.log("Could not update the appointment: ", e))
        closeModal("edit-modal")
    }

    const defaultDate = typeof(entry.date) === "string" ? entry.date.split("T")[0] : ""

    useEffect(()=>{
        setDone_(entry.done)
        setDeleted_(entry.deleted)
        setImportance(entry.levelOfImportance)
        setData(entry)
    }, [props.stateListener])
    return (
        <div className="modal-container">
            <div className="modal-title">Edit Appointment</div>

            <div className="mt-15">
                <label htmlFor="Title_e">Exam Hall</label> <br/>
                <input type="text" className="mt-5" id="Title_e" maxLength={50} name="examHall" defaultValue={data.examHall} onChange={editApp}/>
               
            </div>

            <div className="mt-15">
                <label htmlFor="Description_e">Lecture Name</label> <br/>
                <textarea id="Description_e" maxLength={50} className="mt-5" name="lectureName" defaultValue={data.lectureName} cols={25} rows={1} onChange={editApp}></textarea> <br />
              
            </div>

            <div className="row mt-15">
                <div>
                    <label htmlFor="Address_e">Academic Staff Member</label>
                    <input type="text" id="Address_e" name="academicStaff" maxLength={50} defaultValue={data.academicStaff} onChange={editApp}/>
                </div>
                <br></br>
                <div className="mt-15">
                    <label htmlFor="Title_e">Number Of Student</label> <br />
                    <input type="text" className="mt-5" id="Title_e" maxLength={5} name="numOfStudent" defaultValue={data.numOfStudent} onChange={editApp} />

                </div>
                <br></br>
                <div className="mt-15">
                    <label htmlFor="Title_e">Year</label> <br />
                    <input type="text" className="mt-5" id="Title_e" maxLength={5} name="year" defaultValue={data.year} onChange={editApp} />

                </div>
                <br></br>
                <div className="mt-15">
                    <label htmlFor="Title_e">Semester</label> <br />
                    <input type="text" className="mt-5" id="Title_e" maxLength={5} name="semester" defaultValue={data.semester} onChange={editApp} />

                </div>
                <br></br>
                <div className="mt-15">
                    <label htmlFor="Title_e">Subject</label> <br />
                    <input type="text" className="mt-5" id="Title_e" maxLength={5} name="subject" defaultValue={data.subject} onChange={editApp} />

                </div>

                <div className="ms-10">
                    <label htmlFor="LevelOfImportance_e">Importance</label>
                    <select name="levelOfImportance" id="LevelOfImportance_e" value={importance} onChange={editApp}>
                        <option value={5}>Very High</option>
                        <option value={4}>High</option>
                        <option value={3}>Assignment</option>
                        <option value={2}>Quiz</option>
                        <option value={1}>Mid Exam</option>
                        <option value={0}>End Exam</option>
                    </select>
                </div>
            </div>

            <div className="row mt-15 items-center">
                <div>
                    <label htmlFor="Date_e">Date</label>
                    <input type="date" id="Date_e" name="date" onChange={editApp} defaultValue={defaultDate}/>
                </div>

                <div className="ms-10">
                    <label htmlFor="Time_e">Start Time</label>
                    <input type="time" id="Time_e" name="time" onChange={editApp} defaultValue={data.time} />
                </div>

                <div className="ms-10">
                    <label htmlFor="Time_e">End Time</label>
                    <input type="time" id="Time_e" name="endTime" onChange={editApp} defaultValue={data.endTime} />
                </div>
                <div className="ms-10 row items-center">
                    <label htmlFor="Done_e">Done</label>
                    <input type="checkbox" id="Done_e"  name="done" checked={done_} onChange={editApp}/>
                </div>

                <div className="ms-10 row items-center">
                    <label htmlFor="Deleted_e">Deleted</label>
                    <input type="checkbox" id="Deleted_e" name="deleted" checked={deleted_} onChange={editApp}/>
                </div>
            </div>

            <div className="row justify-btw modal-action-container mt-15">
                <div className="btn" onClick={()=> closeModal("edit-modal")}>Cancel</div>
                <div className="btn" onClick={updateApp}>Update</div>
            </div>
        </div>
    )
}