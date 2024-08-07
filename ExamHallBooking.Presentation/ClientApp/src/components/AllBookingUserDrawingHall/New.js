import { useState } from "react"
import { closeModal, entry, formatedDateToStr, formatedTimeToStr, postAppointmentDrawingHall } from "./Lib"
export default function New(props) {


    const [titleLength, setTitleLength] = useState(0)
    const [desLength, setDesLength] = useState(0)
    const [addrLength, setAddrLength] = useState(0)

    const newApp = (e) => {
        const name_ = e.target.name
        let v_ = e.target.value

        if (name_ === "numOfStudent" && v_ > 150) {
            alert("The number of students cannot exceed 150.");
            return;
        }

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
        postAppointmentDrawingHall(entry).then(r => {
            props.refreshApp(Math.random() * 125 * Math.random())
        }).catch(e => console.log("Error happened at posting new app: ", e))

        closeModal("new-modal")
        window.location.reload();
        window.location.reload();

        window.location.reload();
        window.location.reload();

    }

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const day = today.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="modal-container">
            <div className="modal-title">New Mid/Qiuz/Assignment Exam Booking</div>

            {/*        <div className="mt-15">
            <label htmlFor="Hall_n" >Exam Hall  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;    :</label>
            <select className="mt-5" id="Hall_n" name="examHall" onChange={newApp} defaultValue={0} >

                <option value={2}>Hall 02 (Computer)</option>
                <option value={1}>Hall 01 (Admin)</option>
                <option value={0}>Select Exam Hall</option>

            </select>

        </div>*/}
            <br></br>
            <div className="mt-15">
                <label htmlFor="LectureName_n">Lecture Email Addresse&nbsp; :</label>
                <input type="text" id="LectureName_n" name="lectureName" onChange={newApp} maxLength={50} style={{ width: '250px' }} />

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
                <label htmlFor="LevelOfImportance_n">Exam Type :</label>
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
                        <input type="number" /*className="mt-5"*/ id="Num_of_Student" placeholder="<150"  max="150" name="numOfStudent" onChange={newApp} />
                    </div>

                    <div className="form-field">
                        <label for="Year_n">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Batch :</label>
                        <select id="Year_n" name="year" onChange={newApp} style={{ width: '115px' }} defaultValue={0}>

                            <option value={2022}>2022</option>
                            <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={0}>Select Batch</option>
                        </select>

                    </div>

                    <div className="form-field">
                        <label for="Semester_n">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Semester :</label>
                        <select id="Semester_n" name="semester" onChange={newApp} style={{ width: '133px' }} defaultValue={0} >
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




            <div>
                <div className="ms-20">

                    <label htmlFor="Date_n">Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
                    <input type="date" id="Date_n" name="date" min={getCurrentDate()} defaultValue={formatedDateToStr()} onChange={newApp} />
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