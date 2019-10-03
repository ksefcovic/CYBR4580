import React from "react"

import { Button } from 'reactstrap';

const StandardButton = ({
    text
}) => {
    return (
        <>
            <Button color="primary">{text}</Button>
        </>
    );
}

export default StandardButton;
