import { useEffect } from "react"
import { activeId, closeModal, deleteAppointmentP } from "./Lib"
export default function DeleteP(props) {

    const deleteAppP = () => {
        deleteAppointmentP(activeId.id).then(r => {
            props.refreshApp(Math.random() * 248 * Math.random())
        })
            .catch(e => console.log("Could not delete the appointment: ", e))

        closeModal("deleteP-modal")
    }



    useEffect(() => {
    }, [props.stateListener])

    return (
        <div className="modal-container">
            <div className="modal-title">Warning Delete the Appointment</div>
            <p>Are you sure you want to Delete the Appointment?</p>

            <div className="row justify-btw modal-action-container mt-15">
                <div className="btn" onClick={() => closeModal("deleteP-modal")}>Cancel</div>
                <div className="btn" onClick={deleteAppP}>Yes</div>
            </div>
        </div>
    )
}