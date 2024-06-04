import { activeId, entry, openModal } from "./Lib";


export default function Appointment(props) {

    const handlingDelete = (id) =>{
        activeId.id = id
        // update state
        props.stateListener(Math.random() * 848 * Math.random())
        //open edit modal
        openModal("delete-modal")
    }

    const handlingEdit = (row)=>{
        Object.assign(entry, row)
        // update state
        props.stateListener(Math.random() * 548 * Math.random())
        //open edit modal
        openModal("edit-modal")
    }

    const levelOfImportance = ["End Exam", "Mid Exam", "Quiz", "Assignmnet", "", ""];
    return (
        // <div className="Booking_table">
        // <div className={`row py-5 underline  ${props.item.deleted ? ' bc-red2' : props.item.done ? ' bc-green2' : ''}`} key={props.item.id}>
        //     <div className="column id">{props.item.id}</div>
        //         <div className="column examHall">{props.item.examHall}</div>





        //     <div className="column lectureName">{props.item.lectureName}</div>
        //     <div className="column numOfStudent">{props.item.numOfStudent}</div>
        //     <div className="column year">{props.item.year}</div>
        //     <div className="column semester">{props.item.semester}</div>
        //     <div className="column subject">{props.item.subject}</div>
        //     <div className={`column importance ${props.item.levelOfImportance === 1 ? ' bc-green' : 
        //     props.item.levelOfImportance === 2 ? ' bc-gold' : props.item.levelOfImportance === 0 ? ' bc-red' : props.item.levelOfImportance === 3 ? ' bc-blue': ''}`}>
        //         {levelOfImportance[props.item.levelOfImportance]}</div>
        //     <div className="column date">{props.item.date.split("T")[0]}</div>
         
        //     <div className="column time">{props.item.time}</div>-
        //     <div className="column endTime">{props.item.endTime}</div>
        //     <div className="column academicStaff">{props.item.academicStaff}</div>
           
        //     </div>

        // </div>
        <tr className={props.item.deleted ? 'bc-red2' : props.item.done ? 'bc-green2' : ''}>
        <td>{props.item.id}</td>
        <td>{props.item.examHall}</td>
        <td>{props.item.lectureName}</td>
        <td>{props.item.numOfStudent}</td>
        <td>{props.item.year}</td>
        <td>{props.item.semester}</td>
        <td>{props.item.subject}</td>
        <td className={props.item.levelOfImportance === 1 ? 'bc-green' : 
        props.item.levelOfImportance === 2 ? 'bc-gold' : props.item.levelOfImportance === 0 ? 'bc-red' : props.item.levelOfImportance === 3 ? 'bc-blue': ''}>
          {levelOfImportance[props.item.levelOfImportance]}</td>
        <td>{props.item.date.split("T")[0]}</td>
        <td>{props.item.time}</td>
        <td>{props.item.endTime}</td>
        <td>{props.item.academicStaff}</td>
      </tr>
    )
}
