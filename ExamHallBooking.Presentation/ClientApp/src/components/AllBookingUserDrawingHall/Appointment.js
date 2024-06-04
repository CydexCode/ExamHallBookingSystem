import { activeId, entry, openModal } from "./Lib";


export default function AppointmentDrawingHall(props) {

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