import React from "react";
import '../styles/FramesNotes.css'

const ItemNote = (props) => {

    return (
        <div className="div-complete">
            <div className="div-secondary">
                <p className="p-major">{props.text}</p>
                <p className="p-secondary">{props.contenido}</p>
            </div>
            <div className="container-button">
                <button className="button-delete"
                    onClick={props.onDelete}>
                    x</button>
            </div>
        </div>
    )
}
export default ItemNote;
