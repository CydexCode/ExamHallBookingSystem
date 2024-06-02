
import { useEffect } from "react"
import { activeId, closeModal, deleteAppointment } from "./Lib"
export default function Delete(props){

    const deleteApp = () => {
        deleteAppointment(activeId.id).then(r=> {
            props.refreshApp(Math.random() * 248 * Math.random())
        })
        .catch(e=>console.log("Could not delete the appointment: ", e))

        closeModal("delete-modal")
    }



    useEffect(()=>{
    }, [props.stateListener])

    return (
        <div className="modal-container">
            <div className="modal-title">Warning Reject the Appointment</div>
            <p>Are you sure you want to Reject the Appointment?</p>

            <div className="justify-btw modal-action-container mt-15">
                <div className="btn" onClick={()=>closeModal("delete-modal")}>Cancel</div>
                <div className="btn" onClick={deleteApp}>Yes</div>
            </div>
        </div>
    )
}