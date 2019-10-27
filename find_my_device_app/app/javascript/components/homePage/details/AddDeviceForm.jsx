import React from "react"

const AddDeviceForm = ({
    user,
    addNewDevice
}) => {
    const [value, setValue] = React.useState("");

    const createNewDevice = () => {
        console.log("Creating new device.");
        console.log("User: ", user);
        if (value != "") {
            addNewDevice(user.id, value);
        }
    }

    const handleChange = (value) => {
        setValue(value);
    }

    return (
        <div className="addDeviceForm">
            <h2>Add New Device:</h2>
            <form onSubmit={createNewDevice}>
                <label>
                    Name:
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddDeviceForm;
