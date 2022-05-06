import React from "react";
import '../styles/Number.css'

const NumberNotes = ({ total }) => {

    return (
        <div className="container-number">
            <p className="number-notes">Tienes {total} notas</p>
        </div>
    )
}
export default NumberNotes;