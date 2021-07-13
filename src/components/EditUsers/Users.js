import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import firebaseDb from "../../firebase"
import "./Users.css"

function EditUsers() {

    // initialize state values
    let [users, setUsers] = useState({})
    let [currentKey, setCurrentKey] = useState('')

    // set value of users after render
    useEffect(() => {
        firebaseDb.child('users').on("value", cb => {
            if (cb.val() != null)
                setUsers({
                    ...cb.val()
                })
        })
    }, [])

    // adds new user to db is currentKey is empty meaning no user is selected
    // updates user values if currentKey is the key of an existing user
    const addAndEdit = obj => {
        if (currentKey === "")
            firebaseDb.child('users').push(obj)
        else
            firebaseDb.child(`users/${currentKey}`).set(obj)
        setCurrentKey("")
    }

    // remove user with "key" from users
    const deleteUser = key => {
        firebaseDb.child(`users/${key}`).remove()
    }

    console.log('users', Object.keys(users))

    return (
        <>
            <div className="container-div">
                <div className="new-user-container">
                    <div>Add or update user</div>
                    <UserForm {...({ addAndEdit, currentKey, users })} />
                </div>
                <div className="user-list-container">
                    <div className="edit-user-title">Users</div>
                    <div className="user-list-div">
                        <table className="user-table">
                            <thead className="table-header">
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Sex</th>
                                    <th>Birthday</th>
                                    <th>Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(users).map(key => {
                                        return <tr key={key}>
                                            <td>{users[key].firstName}</td>
                                            <td>{users[key].lastName}</td>
                                            <td>{users[key].sex}</td>
                                            <td>{users[key].birthday}</td>
                                            <td className="update-buttons">
                                                <button className="edit-delete-button" onClick={() => setCurrentKey(key)}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button className="edit-delete-button" onClick={() => deleteUser(key)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
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

export default EditUsers;