import { useState } from "react"
import { closeModal, entry, formatedDateToStr, formatedTimeToStr, postAppointment } from "./Lib"
export default function New(props){

    const [titleLength, setTitleLength] = useState(0)
    const [desLength, setDesLength] = useState(0)
    const [addrLength, setAddrLength] = useState(0)

    const newApp =(e)=> {
        const name_ = e.target.name
        let v_ = e.target.value

        if(name_ === "examHall"){
            setTitleLength(v_.length)
        }

        if(name_ === "lectureName"){
            setDesLength(v_.length)
        }

        if (name_ === "academicStaff"){
            setAddrLength(v_.length)
        }

        if (name_ === "numOfStudent") {
            setTitleLength(v_.length)
        }
        if (name_ === "year") {
            setTitleLength(v_.length)
        }
        if (name_ === "semester") {
            setTitleLength(v_.length)
        }
        if (name_ === "subject") {
            setTitleLength(v_.length)
        }


        if(name_ === "date"){
            v_ = new Date(v_)
        }

        if(name_ === "levelOfImportance"){
            v_ = Number(v_)
        }

        entry[name_] = v_
    }

    const postApp = ()=> {
        postAppointment(entry).then(r=> {
            props.refreshApp(Math.random() * 125 * Math.random())
        }).catch(e=>console.log("Error happened at posting new app: ", e))

        closeModal("new-modal")
    }

    return (
        <div className="modal-container">
            <div className="modal-title">New Booking</div>

            <div className="mt-15">
                <label htmlFor="Title_n">Exam Hall</label> <br/>
                <input type="text" className="mt-5" id="Title_n" maxLength={50} name="examHall" onChange={newApp}/>
               
            </div>

            <div className="mt-15">
                <label htmlFor="Description_n">Lecture Name</label> <br/>
                <textarea id="Description_n" maxLength={50} className="mt-5" name="lectureName" onChange={newApp} cols={25} rows={1}></textarea> <br />
               
            </div>

            <div className="row mt-25">
                <div>
                    <label htmlFor="Address_n">Academic Staff Member</label>
                    <input type="text" id="Address_n" name="academicStaff" onChange={newApp} maxLength={50} />
                </div>

                <br></br>
                <div className="mt-15">
                    <label htmlFor="Title_n">Number Of Students</label> <br />
                    <input type="text" className="mt-5" id="Title_n" maxLength={5} name="numOfStudent" onChange={newApp} />

                </div>
                <br></br>
                <div className="mt-15">
                    <label htmlFor="Title_n">Year</label> <br />
                    <input type="text" className="mt-5" id="Title_n" maxLength={5} name="year" onChange={newApp} />

                </div>
                <br></br>
                <div className="mt-15">
                    <label htmlFor="Title_n">Semester</label> <br />
                    <input type="text" className="mt-5" id="Title_n" maxLength={5} name="semester" onChange={newApp} />

                </div>
                <br></br>

                <div className="mt-15">
                    <label htmlFor="Title_n">Subject</label> <br />
                    <input type="text" className="mt-5" id="Title_n" maxLength={5} name="subject" onChange={newApp} />

                </div>

                <div className="ms-10">
                    <label htmlFor="LevelOfImportance_n">Exam Type</label>
                    <select name="levelOfImportance" id="LevelOfImportance_n" onChange={newApp} defaultValue={0}>
             
                        <option value={3}>Assignment</option>
                        <option value={2}>Quiz</option>
                        <option value={1}>Mid Exam</option>
                        <option value={0}>End Exam</option>
                    </select>
                </div>
            </div>

            <div className="row mt-15">
                <div>
                    <label htmlFor="Date_n">Date</label>
                    <input type="date" id="Date_n" name="date" defaultValue={formatedDateToStr()} onChange={newApp}/>
                </div>

                <div className="ms-10">
                    <label htmlFor="Time_n">Start Time</label>
                    <input type="time" id="Time_n" name="time" defaultValue={formatedTimeToStr()} onChange={newApp} />
                </div>
                <div className="ms-10">
                    <label htmlFor="Time_n">End Time</label>
                    <input type="time" id="Time_n" name="endTime" defaultValue={formatedTimeToStr()} onChange={newApp} />
                </div>
            </div>

            <div className="row justify-btw modal-action-container mt-15">
                <div className="btn" onClick={()=> closeModal("new-modal")}>Cancel</div>
                <div className="btn" onClick={postApp}>Add</div>
            </div>
        </div>
    )
}