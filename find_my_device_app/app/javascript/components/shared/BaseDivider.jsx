import React from "react"

const BaseDivider = ({
    color,
    thickness
}) => {
    const styles = {
        backgroundColor: color ? color : "black",
        width: "100%",
        height: thickness ? thickness : "2px"
    }
    return (
        <div style={styles}></div>
    )
}

export default BaseDivider;