import React, { useEffect, useState } from "react";
import firebaseDb from "../../firebase"
import "./AllUsers.css"

function AllUsers() {

    // initialize state values
    let [users, setUsers] = useState({});
    let [youngest, setYoungest] = useState(1000);
    let [oldest, setOldest] = useState(0);
    let [filter, setFilter] = useState("All")
    let average;
    // let [currentKey, setCurrentKey] = useState('')

    // set value of users after render
    useEffect(() => {
        firebaseDb.child('users').on("value", cb => {
            if (cb.val() != null)
                setUsers({
                    ...cb.val()
                })
        })
    }, [])

    let userArr = Object.values(users)

    // find the age of the user and compare to oldest and youngest of 
    // all users
    const findAge = (date) => {
        let todayDate = new Date();
        let birthDate = new Date(date);
        let age = todayDate.getFullYear() - birthDate.getFullYear();
        let m = todayDate.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && todayDate.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    console.log('age: ' + findAge("1980-08-10"));
    console.log('users', userArr)

    // for (let i = 0; i < userArr.length; i++) {
    //     if (findAge(userArr[i].birthday > oldest)) {
    //         setOldest
    //     }
    // }

    const handleSelectChange = (e) => {
        let { value } = e.target
        setFilter(value)
    }

    let newUserArr;

    if (filter === "All") {
        newUserArr = userArr
    } else if (filter === "Male") {
        newUserArr = userArr.filter(user => user.sex === "Male")
    } else {
        newUserArr = userArr.filter(user => user.sex === "Female")
    }

    console.log(newUserArr)
    return (
        <>
            <div className="outter-container">
                <div className="filter-container">
                    <select className="form-input" name="sex" value={filter}
                        onChange={handleSelectChange}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="age-and-list-container">
                    <div className="age-container">

                    </div>
                    <div className="user-list-container">

                    </div>
                </div>
            </div>

        </>
    )

}

export default AllUsers;