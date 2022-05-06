import React from "react";
import '../styles/FramesNotes.css'

const FramesNotes = (props) => {

    return (
        <div className="div-major">
            {props.children}
        </div>
    )
};
export default FramesNotes;