import React from "react";
import '../styles/Button.css';
//import Form from './form'
const Button = (props) => {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <div className="container-buttona">
            <button className="button-primary"
                onClick={onClickButton}
            >
                agregar
            </button>
        </div>
    )
}
export default Button;