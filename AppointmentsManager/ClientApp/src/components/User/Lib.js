
export const testData = [
    { ID: 1, ExamHall: "Hall one", LectureName: "Description one", LevelOfImportance: 3, Date: "14-04-2023", Time: "17:32", AcademicStaff: "Be 8500", NumOfStudent: 50, Year: 1,Semester: 1,Subject: "EC1020",EndTime: "18:32" },
    { ID: 2, ExamHall: "Hall two", LectureName: "Description two", LevelOfImportance: 4, Date: "13-04-2023", Time: "13:32", AcademicStaff: "Be 9000", NumOfStudent: 30, Year: 2, Semester: 3, Subject: "EC1020", EndTime: "19:32" },
    { ID: 3, ExamHall: "Hall three", LectureName: "Description three", LevelOfImportance: 5, Date: "12-04-2023", Time: "10:32", AcademicStaff: "Be 2000", NumOfStudent: 20, Year: 3, Semester: 6, Subject: "EC1020", EndTime: "20:32" },
    { ID: 4, ExamHall: "Hall four", LectureName: "Description four", LevelOfImportance: 0, Date: "10-04-2023", Time: "19:09", AcademicStaff: "Be 1000", NumOfStudent: 10, Year: 4, Semester: 8, Subject: "EC1020", EndTime: "12:32" },
]



export const entry = {
    examHall: "Test hall",
    lectureName: "Test Lecture Name",
    numOfStudent: 5,
    year: 1,
    semester: 2,
    subject:"EC1020",
    academicStaff: "Test address",
    date: new Date(),
    time: formatedTimeToStr(),
    endTime: formatedTimeToStr(),
    done: false,
    deleted: false,
    levelOfImportance: 2,
}

export const filter = {
    LevelOfImportance: null,
    All: false,
    Deleted: false,
    Done: false,
    StartDate: null,
    EndDate: null,
    SpecifiedDate: null,
    SpecifiedTime: null
};

export const activeId = {
    id: 0
}

const url = "api/appointment"

export async function getDefault(){
    const res = await fetch(url)

    if(!res.ok && res.status !== 200){
        console.log("It sucked at getting default data: ", res)
        notifyUser("Something went wrong, please refresh the page.")
        return []
    }

    const result = await res.json()
    return result
}

export async function getAppointments(filter_){
    const res = await fetch(url + "/filters",{
        method: "POST",
        body: JSON.stringify(filter_),
        headers: {
            "content-type": "application/json"
        }
    })

    if(!res.ok){
        console.log("It sucked at gettings appointments with filters: ", res)
        notifyUser("Something went wrong, please clear filters and try again.")
        return []
    }

    return await res.json()
}

export async function postAppointment(newApp){
    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify(newApp),
        headers: {
            "content-type": "application/json"
        }
    })

    if(!res.ok){
        console.log("It sucked at creating new appointment: ", res)
        notifyUser("We could not create your appointment, please try again.")
        return {msg: res}
    }

    return await res.json()
}

export async function updateAppointment(updateApp){
    const res = await fetch(url + "/" + updateApp.id,{
        method: "PUT",
        body: JSON.stringify(updateApp),
        headers: {
            "content-type": "application/json"
        }
    })

    if(!res.ok){
        console.log("It sucked at updating appointment: ", res)
        notifyUser("We could not update your appointment, please try again.")
        return {msg: res}
    }

    return res
}

export async function deleteAppointment(id){
    const res = await fetch(url + "/" + id, {
        method: "DELETE"
    })

    if(!res.ok){
        console.log("It sucked at deleting appointment: ", res)
        notifyUser("Something went wrong, please refresh the page.")
        return {msg: res}
    }

    return res
}

export function notifyUser(msg){
    const notificationEl = document.querySelector(".notifications")
    notificationEl.innerHTML = msg ? msg : ""
    if(msg)
    setTimeout(() => {
        notificationEl.innerHTML = ""
    }, 12000);
}

export function openModal(modal){
    const modal_ = document.querySelector("."+modal)
    if(modal_){
        modal_.classList.remove("hidden")
    }
}

export function closeModal(modal){
    const modal_ = document.querySelector("."+modal)
    if(modal_){
        modal_.classList.add("hidden")
    }
}

export function formatedDateToStr(d){
    const nd = d ? new Date(d) : new Date()
    const month_ = nd.getMonth() + 1;
    const monthStr = month_ > 9 ? month_ : 0 + "" + month_;
    const day_ = nd.getDate() > 9 ? nd.getDate() : 0 + "" + nd.getDate();
    return nd.getFullYear() + "-" + monthStr + "-" + day_;
}

export function formatedTimeToStr(d) {
    const nd = d ?  new Date(d) : new Date();
    const hr_ = nd.getHours() < 9 ? 0 + '' + nd.getHours() : nd.getHours()
    const min_ = nd.getMinutes() < 9 ? 0 + '' + nd.getMinutes() : nd.getMinutes()
    return hr_ + ':' + min_
}
