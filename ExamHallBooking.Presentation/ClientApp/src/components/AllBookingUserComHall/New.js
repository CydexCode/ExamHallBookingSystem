import { useState } from "react"
import { closeModal, entry, formatedDateToStr, formatedTimeToStr, postAppointment } from "./Lib"
export default function New(props) {

    const [titleLength, setTitleLength] = useState(0)
    const [desLength, setDesLength] = useState(0)
    const [addrLength, setAddrLength] = useState(0)

    const newApp = (e) => {
        const name_ = e.target.name
        let v_ = e.target.value

        if (name_ === "examHall") {
            setTitleLength(v_.length)
        }

        if (name_ === "lectureName") {
            setDesLength(v_.length)
        }

        if (name_ === "academicStaff") {
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


        if (name_ === "date") {
            v_ = new Date(v_)
        }

        if (name_ === "levelOfImportance") {
            v_ = Number(v_)
        }

        entry[name_] = v_
    }

    const postApp = () => {
        postAppointment(entry).then(r => {
            props.refreshApp(Math.random() * 125 * Math.random())
        }).catch(e => console.log("Error happened at posting new app: ", e))

        closeModal("new-modal")
        window.location.reload();
    }

    return (
        <div className="modal-container">
            <div className="modal-title">New End Exam Booking</div>
            <br></br>
            {/*       <div className="mt-15">
            <label htmlFor="Hall_n" >Exam Hall  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :</label>
            <select className="mt-5" id="Hall_n" name="examHall" onChange={newApp} defaultValue={0} >

                <option value={2}>Hall 02 (Computer)</option>
                <option value={1}>Hall 01 (Admin)</option>
                <option value={0}>Select Exam Hall</option>

            </select>

        </div>*/}
            <br></br>
            <div className="mt-15">
                <label htmlFor="LectureName_n">Enter Email Address&nbsp; :</label>
                <input type="text" id="LectureName_n" name="lectureName" onChange={newApp} maxLength={50} />

            </div>

            {/*     <div className="row mt-25">
            <div>
                <label htmlFor="AcademicStaff_n" >
                    Non  Academic   &nbsp;:</label>
                <input type="text" id="AcademicStaff_n" name="academicStaff" onChange={newApp} maxLength={50} /><br></br>
                <label>Staff Member</label>
            </div>
        </div>*/}
            <br></br>

            <div className="ms-10">
                <label htmlFor="LevelOfImportance_n">Exam Type</label>
                <select name="levelOfImportance" id="LevelOfImportance_n" onChange={newApp} defaultValue={4}>

                    <option value={3}>Assignment</option>
                    <option value={2}>Quiz</option>
                    <option value={1}>Mid Exam</option>
                    {/*    <option value={0}>End Exam</option>*/}
                    <option value={4}>Exam Type</option>
                </select>

            </div>
            <br></br>
            <br></br>
            <div className="form-container">
                <div className="form-row">
                    <div className="form-field">
                        <label for="Num_of_Student">No Of Students :</label>
                        <input type="text" /*className="mt-5"*/ id="Num_of_Student" maxLength="2" name="numOfStudent" onChange={newApp} />
                    </div>

                    <div className="form-field">
                        <label for="Year_n">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Year :</label>
                        <select id="Year_n" name="year" onChange={newApp} defaultValue={0}>

                            <option value={4}>4th Year</option>
                            <option value={3}>3rd Year</option>
                            <option value={2}>2nd Year</option>
                            <option value={1}>1st Year</option>
                            <option value={0}>Select Year</option>
                        </select>

                    </div>

                    <div className="form-field">
                        <label for="Semester_n">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Semester :</label>
                        <select id="Semester_n" name="semester" onChange={newApp} defaultValue={0} >
                            <option value={8}>8th  Semester</option>
                            <option value={7}>7th  Semesterr</option>
                            <option value={6}>6th  Semester</option>
                            <option value={5}>5th Semester</option>
                            <option value={4}>4th  Semester</option>
                            <option value={3}>3rd  Semesterr</option>
                            <option value={2}>2nd  Semester</option>
                            <option value={1}>1st Semester</option>
                            <option value={0}>Select Semester</option>
                        </select>
                    </div>
                    <br></br>

                    <div className="form-field">
                        <label for="Subject_n">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subject :</label>
                        <input type="text" id="Subject_n" maxLength="6" name="subject" onChange={newApp} />

                    </div>

                </div>
            </div>





            <div className="ms-20">
                <div>
                    <label htmlFor="Date_n">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                    <input type="date" id="Date_n" name="date" defaultValue={formatedDateToStr()} onChange={newApp} />
                </div>
                <br></br>
                <div className="ms-20">
                    <label htmlFor="Time_n">Start Time &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                    <input type="time" id="Time_n" name="time" defaultValue={formatedTimeToStr()} onChange={newApp} />
                </div>
                <br></br>
                <div className="ms-20">
                    <label htmlFor="Time_n">End Time &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                    <input type="time" id="Time_n" name="endTime" defaultValue={formatedTimeToStr()} onChange={newApp} />
                </div>
            </div>

            <div className="row justify-btw modal-action-container mt-15">
                <div className="btn" onClick={() => closeModal("new-modal")}>Cancel</div>
                <div className="btn" onClick={postApp}>Request</div>
            </div>
        </div>
    )
}