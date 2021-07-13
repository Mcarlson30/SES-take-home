import React, { useState, useEffect } from "react";

function UserForm(props) {

    // set default values for user object
    const startingFieldValues = {
        firstName: "",
        lastName: "",
        sex: "",
        birthday: "",
    }

    // initilize default state of values to startingFieldValues object
    let [values, setValues] = useState(startingFieldValues)

    // invoke when there is a change in currentKey meaning a user was selected
    // to be edited.
    useEffect(() => {
        setValues({
            ...props.users[props.currentKey]
        })
    }, [props.currentKey, props.users])

    // on user input update values in the user object
    const handleInputChange = e => {
        let { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    // when form is submitted pass user object to addAndEdit funtion and set
    // user values back to default
    const handleSubmit = e => {
        e.preventDefault();
        props.addAndEdit(values)
        setValues({
            firstName: "",
            lastName: "",
            sex: "",
            birthday: "",
        })
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
                    <option value="">Select Option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    {/* <option value="Non-binary">Non-binary</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Prefer not to say">Prefer not to say</option> */}
                </select>
                <input className="form-input" name="birthday"
                    value={values.birthday} type="date" onChange={handleInputChange} />
                <input type="submit" value={props.currentKey === "" ? "Save" : "Update"} />
            </form>
        </div>
    )
}

export default UserForm;