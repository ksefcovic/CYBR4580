import React from "react"
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const AddDeviceForm = ({
    user,
    addNewDevice,
    deviceTypes,
    onClose
}) => {
    const [value, setValue] = React.useState("");
    const [selectedType, setSelectedType] = React.useState(deviceTypes ? deviceTypes[0] : "");

    const createNewDevice = () => {
        if (value != "") {
            deviceTypes.map(deviceType => {
                if (deviceType.name == selectedType) {
                    addNewDevice(user.id, value, deviceType.id);
                    onClose();
                }
            });
        }
    }

    return (
        <div className="addDeviceForm">
            <h2>Add New Device:</h2>
            <Form >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input value={value} onChange={e => setValue(e.target.value)} type="text" name="name" id="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="photo_url">Device Type</Label>

                    <Col sm={10}>
                    <Input value={selectedType} onChange={e => setSelectedType(e.target.value)} type="select" name="photo_url" id="photo_url"> 
                        { deviceTypes.map( type => <option>{type.name}</option>) }}
                    </Input>
                </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={createNewDevice}>Add Device</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}

export default AddDeviceForm;
