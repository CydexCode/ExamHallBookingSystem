
import { useEffect, useState } from "react"
import Delete from "./Delete"
import Edit from "./Edit"
import New from "./New"
import Appointment from "./Appointment"

import "../../NavBar/NavBar.css"; 

import "./AR-mac.css";
import { getDefault, openModal, filter, getAppointmentsDrawingHall, notifyUser } from "./Lib";
import NavBar from "../../NavBar/NavBar.js"; 
import ConfirmSignOut from "./ConfirmSignOut"; 


export default function Home(props) {

    const [dataList, setDataList] = useState([])

    const [refreshData, setRefreshData] = useState(0)
    const [stateListener, setStateListener] = useState(0)
    const [showConfirmSignOut, setShowConfirmSignOut] = useState(false);

    const filterApp = (e) => {
        let name_ = e.target.name;
        let v_ = e.target.value;

        if (name_ === "All" || name_ === "Done" || name_ === "Deleted") {
            v_ = e.target.checked;
            filter[name_] = v_;

            if (name_ === "SpecifiedDate") {
                filter.SpecifiedDate = new Date(v_);
                filter.StartDate = null
                filter.EndDate = null
            }

            if (name_ === "SpecifiedTime") {
                filter.SpecifiedTime = v_;
            }

            if (name_ === "LevelOfImportance") {
                filter.LevelOfImportance = Number(v_) === 9 ? null : Number(v_);
            }

            if (name_ === "period") {
                // 1 = today, 2 = this week, 3 = last week
                let sd_ = new Date(), ed_ = new Date();
                const dayNum = sd_.getDay();

                if (v_ === "1") {
                    sd_.setDate(dayNum - 1)
                }

                if (v_ === "2") {
                    let startDaysInSec = (dayNum - 1) * 24 * 60 * 60 * 1000;
                    let endDaysInSec = (7 - dayNum) * 24 * 60 * 60 * 1000;

                    sd_ = new Date(Date.now() - startDaysInSec);
                    ed_ = new Date(Date.now() + endDaysInSec);
                }

                if (v_ === "3") {
                    let startDaysInSec = dayNum * 24 * 60 * 60 * 1000;
                    let endDaysInSec = (6 + dayNum) * 24 * 60 * 60 * 1000;

                    ed_ = new Date(Date.now() - startDaysInSec);
                    sd_ = new Date(Date.now() - endDaysInSec);
                }

                filter.StartDate = v_ === '4' ? null : sd_;
                filter.EndDate = v_ === '4' ? null : ed_;
                filter.SpecifiedDate = null
            }

        }

        if (name_ === "period") {
            // 1 = today, 2 = this week, 3 = last week
            let sd_ = new Date(), ed_ = new Date();
            const dayNum = sd_.getDay();

            if (v_ === "1") {
                sd_.setDate(dayNum - 1)
            }

            if (v_ === "2") {
                let startDaysInSec = (dayNum - 1) * 24 * 60 * 60 * 1000;
                let endDaysInSec = (7 - dayNum) * 24 * 60 * 60 * 1000;

                sd_ = new Date(Date.now() - startDaysInSec);
                ed_ = new Date(Date.now() + endDaysInSec);
            }

            if (v_ === "3") {
                let startDaysInSec = dayNum * 24 * 60 * 60 * 1000;
                let endDaysInSec = (6 + dayNum) * 24 * 60 * 60 * 1000;

                ed_ = new Date(Date.now() - startDaysInSec);
                sd_ = new Date(Date.now() - endDaysInSec);
            }

            filter.StartDate = v_ === '4' ? null : sd_;
            filter.EndDate = v_ === '4' ? null : ed_;
            filter.SpecifiedDate = null
        }

        if (name_ === "SpecifiedDate") {
            filter.SpecifiedDate = new Date(v_);
            filter.StartDate = null
            filter.EndDate = null
        }

        if (name_ === "SpecifiedTime") {
            filter.SpecifiedTime = v_;
        }

        if (name_ === "LevelOfImportance") {
            filter.LevelOfImportance = Number(v_) === 9 ? null : Number(v_);
        }

        // fetch data with filter
        getAppointmentsDrawingHall(filter).then(r => {
            if (r.length < 1) {
                notifyUser("")
            }
            setDataList(r)
        }).catch(e => console.log("Error getting data on filter: ", e))
    }


    useEffect(() => {
        getDefault().then(data => {
            setDataList(data)
        }).catch(e => console.log("Error inside home: ", e))
    }, [refreshData])

    const handleBackClick = () => {
        window.location.href = '/';
    };

    const handleMainClick = () => {
        window.location.href = '/';
    };

    const handleUserClick = () => {
        window.location.href = '/login';
    };
    const handleAdminClick = () => {
        window.location.href = '/adminLogin';
    };
    const handleSignOutClick = () => {
        setShowConfirmSignOut(true);
    };

    const confirmSignOut = () => {
        setShowConfirmSignOut(false);
        window.location.href = '/';
    };

    const cancelSignOut = () => {
        setShowConfirmSignOut(false);
    };
    const handleCalClick = () => {
        window.location.href = '/calendar';
    };
    return (

        <div>
            <NavBar

                onBackClick={handleBackClick}
                showBackButton={false}
                onCalClick={handleCalClick}
                onMainClick={handleMainClick}
                onUserClick={handleUserClick}
                showCalBtton={true}
                onAdminClick={handleAdminClick}
                onSignOutClick={handleSignOutClick}
                showAdminUser={false} // Hide User and Admin
                showSignOutButton={true}
            />

            <div className="centered-heading-container">
                <h1>Drawing Hall Booking - Admin</h1>
            </div>

            <main>


                {/* <div className="notifications spacer-20"></div> */}
                <section className="filter2">
                    <div className="row items-center filter2-items">
                        <div className="add-btn row items2-center content2-center">
                            <div className="btn add" onClick={() => openModal("new-modal")}>Add a Booking</div>
                        </div>
                        <div className="modal2-title">Filters</div>
                        <div className="checkbox">
                            <div className="c2">
                                <label htmlFor="All_f">All</label>
                                <input type="checkbox" id="All_f" name="All" onChange={filterApp} />
                            </div>
                            <div className="c2">
                                <label htmlFor="Done_f">Accepted</label>
                                <input type="checkbox" id="Done_f" name="Done" onChange={filterApp} />
                            </div>
                            <div className="c2">
                                <label htmlFor="Deleted_f">Rejected</label>
                                <input type="checkbox" id="Deleted_f" name="Deleted" onChange={filterApp} />
                            </div>
                        </div>
                        <div className="c2">
                            <label htmlFor="period">Period</label>
                            <select name="period" id="period" defaultValue={"4"} onChange={filterApp}>
                                <option value="5" disabled>Period</option>
                                <option value="4">Default</option>
                                <option value="1">Today</option>
                                <option value="2">This week</option>
                                <option value="3">Last week</option>
                            </select>
                        </div>
                        <div className="c2">
                            <label htmlFor="SpecifiedDate">Specified Date</label>
                            <input type="date" id="SpecifiedDate" name="SpecifiedDate" onChange={filterApp} />
                        </div>
                        <div className="c2">
                            <label htmlFor="SpecifiedTime">Specified Time</label>
                            <input type="time" id="SpecifiedTime" name="SpecifiedTime" onChange={filterApp} />
                        </div>
                        <div className="c2">
                            <label htmlFor="LevelOfImportance_f">Exam Type</label>
                            <select name="LevelOfImportance" id="LevelOfImportance_f" defaultValue={8} onChange={filterApp}>
                                <option value={8} disabled>Exam Type</option>
                                <option value={9}>Reset</option>
                                <option value={3}>Assignment</option>
                                <option value={2}>Quiz</option>
                                <option value={1}>Mid Exam</option>
                                <option value={0}>End Exam</option>
                            </select>
                        </div>
                        <button className="me-15" onClick={() => window.location.reload()}>Clear Filters</button>
                    </div>
                </section>

                <div className="userPage">
                    <table>
                        <thead>
                            <tr>
                                <th>Booking No</th>
                                <th>Exam Hall</th>
                                <th>Lecturer Email Address</th>
                                <th>Number Of Student</th>
                                <th>Batch</th>
                                <th>Semester</th>
                                <th>Subject</th>
                                <th>Exam Type</th>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Academic Staff Member</th>
                                <th> -----------       </th>
                                <th>  -----------      </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataList.length === 0 ?
                                    <tr><td colSpan="12" className="waiting"><div className="loading"></div></td></tr> :
                                    dataList.map(item => <Appointment item={item} key={item.id} stateListener={setStateListener} />)
                            }
                        </tbody>
                    </table>
                    <section>
                        <section className="modal new-modal hidden">
                            <New refreshApp={setRefreshData} />
                        </section>
                        <div className="block">
                            <section className="modal edit-modal hidden">
                                <Edit stateListener={stateListener} refreshApp={setRefreshData} />
                            </section>
                            <section className="modal delete-modal hidden">
                                <Delete stateListener={stateListener} refreshApp={setRefreshData} />
                            </section>
                        </div>
                    </section>
                </div>
            </main>
            {showConfirmSignOut && (
                <ConfirmSignOut
                    onConfirm={confirmSignOut}
                    onCancel={cancelSignOut}
                />
            )}
        </div>
    )
}