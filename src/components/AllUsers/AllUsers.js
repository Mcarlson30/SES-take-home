import React, { useEffect, useState } from "react";
import firebaseDb from "../../firebase"
import "./AllUsers.css"

function AllUsers() {

    // initialize state values
    let [users, setUsers] = useState({});
    let [youngest, setYoungest] = useState(1000);
    let [oldest, setOldest] = useState(0);
    let [average, setAverage] = useState()
    let [filter, setFilter] = useState("All")
    let [filteredUsers, setFilteredUsers] = useState(users)

    // set value of users after render
    useEffect(() => {
        firebaseDb.child('users').on("value", cb => {
            if (cb.val() != null)
                setUsers({
                    ...cb.val()
                })
        })
        // setFilteredUsers(Object.values(users))
    }, [])

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

    // console.log('age: ' + findAge("1980-08-10"));
    // console.log('users', filteredUsers)

    const handleSelectChange = (e) => {
        let { value } = e.target
        setFilter(value)

    }

    // set ages using filtered user list
    useEffect(() => {
        if (filter === "All") {
            let userList = Object.values(users)
            console.log('userlist', Object.values(users))
            // for (let i = 0; userList.length; i++) {
            //     let age = findAge(userList[i].birthday)
            //     if (age > oldest) {
            //         setOldest(age)
            //     }
            //     if (age < youngest) {
            //         setYoungest(age)
            //     }
            //     average += age;
            // }
            // average /= userList.length
        }

    }, [filter])


    // filter users by sex assigned to filteredUsers
    useEffect(() => {
        if (filter === "All") {
            setFilteredUsers(Object.values(users))
        } else if (filter === "Male") {
            setFilteredUsers(Object.values(users).filter(user => user.sex === "Male"))
            console.log('filterdelif', filteredUsers)
        } else {
            setFilteredUsers(Object.values(users).filter(user => user.sex === "Female"))
            // setAges(Object.values(users))
        }
    }, [filter, users])

    // console.log('filtered', filteredUsers)
    return (
        <>
            <div className="outter-container">
                <div className="filter-container">
                    <div className="filter-title">Filter</div>
                    <select className="filter-input" name="sex" value={filter}
                        onChange={handleSelectChange}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="age-and-list-container">
                    <div className="age-container">
                        <div className="youngest-div">
                            <div className="age-title">
                                Youngest
                            </div>
                            <div className="youngest-age">{youngest}</div>
                        </div>
                        <div className="oldest-div">
                            <div className="age-title">
                                Oldest
                            </div>
                            <div className="oldest-age">{oldest}</div>
                        </div>
                        <div className="average-div">
                            <div className="age-title">
                                Average
                            </div>
                            <div className="average-age">{average}</div>
                        </div>

                    </div>
                    <div className="all-user-list-container">
                        <table className="user-list-table">
                            <thead className="table-header">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Sex</th>
                                    <th>Birthday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filter === "ALL" ?
                                    Object.values(users).map(user => {
                                        return <tr key={user.firstName}>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.sex}</td>
                                            <td>{user.birthday}</td>
                                        </tr>
                                    })
                                    :
                                    Object.values(filteredUsers).map(user => {
                                        return <tr key={user.firstName}>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.sex}</td>
                                            <td>{user.birthday}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )

}

export default AllUsers;