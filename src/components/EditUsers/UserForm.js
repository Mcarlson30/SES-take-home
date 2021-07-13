import React, { useState, useEffect } from "react";

function UserForm(props) {

    const startingFieldValues = {
        firstName: "",
        lastName: "",
        sex: "Male",
        birthday: "",
    }

    let [values, setValues] = useState(startingFieldValues)

    const handleInputChange = e => {
        let { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addAndEdit(values)
        // firebaseDb.child('users').push(values)
    }

    return (
        <div className="user-form-conainter">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input className="form-input" allowNull={false} placeholder="First Name" name="firstName"
                    value={values.firstName} onChange={handleInputChange} />
                <input className="form-input" allowNull={false} placeholder="Last Name" name="lastName"
                    value={values.lastName} onChange={handleInputChange} />
                <select className="form-input" name="sex"
                    value={values.sex} onChange={handleInputChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <input className="form-input" name="birthday"
                    value={values.birthday} type="date" onChange={handleInputChange} />
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default UserForm;