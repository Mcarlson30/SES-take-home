import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import firebaseDb from "../../firebase"
import "./Users.css"

function EditUsers() {

    let [users, setUsers] = useState({})
    let [currentKey, setCurrentKey] = useState('')


    useEffect(() => {
        firebaseDb.child('users').on("value", cb => {
            if (cb.val() != null)
                setUsers({
                    ...cb.val()
                })
        })
    }, [])

    const addAndEdit = obj => {
        firebaseDb.child('users').push(obj)
    }

    return (
        <>
            <div className="container-div">
                <div className="new-user-container">
                    <div>Add user</div>
                    <UserForm addAndEdit={addAndEdit} />
                </div>
                <div className="user-list-container">
                    <div className="edit-user-title">Edit or delete user</div>
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
                                            <td>
                                                <a className="edit-delete-button" onClick={() => setCurrentKey(key)}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </a>
                                                <a className="edit-delete-button">
                                                    <i className="fas fa-trash-alt"></i>
                                                </a>
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