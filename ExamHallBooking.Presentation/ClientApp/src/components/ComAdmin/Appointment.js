import { activeId, entry, openModal } from "./Lib";


export default function Appointment(props) {

    const handlingDelete = (id) => {
        activeId.id = id
        // update state
        props.stateListener(Math.random() * 848 * Math.random())
        //open edit modal
        openModal("delete-modal")
    }
    const handlingDeleteP = (id) => {
        activeId.id = id
        // update state
        props.stateListener(Math.random() * 848 * Math.random())
        //open edit modal
        openModal("deleteP-modal")
    }
    const handlingEdit = (row) => {
        Object.assign(entry, row)
        // update state
        props.stateListener(Math.random() * 548 * Math.random())
        //open edit modal
        openModal("edit-modal")
    }

    const levelOfImportance = ["End Exam", "Mid Exam", "Quiz", "Assignmnet", "", ""];
    const examHall = ["Hall 01 (Admin)", "Hall 02 (Computer)"]
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
                props.item.levelOfImportance === 2 ? 'bc-gold' : props.item.levelOfImportance === 0 ? 'bc-red' : props.item.levelOfImportance === 3 ? 'bc-blue' : ''}>
                {levelOfImportance[props.item.levelOfImportance]}</td>
            <td>{props.item.date.split("T")[0]}</td>
            <td>{props.item.time}</td>
            <td>{props.item.endTime}</td>
            <td>{props.item.academicStaff}</td>
            <td><div className="column edit">
                <div className="btn2 edit" onClick={() => handlingEdit(props.item)}>Edit</div>
            </div></td>
            <td> <div className={`column delete  ${props.item.deleted ? ' not-allowed' : ''}`}>
                <div className={`btn2 delete ${props.item.deleted ? ' no-event' : ''}`} onClick={() => handlingDelete(props.item.id)}>Reject</div>
            </div></td>



        </tr>


    )
}