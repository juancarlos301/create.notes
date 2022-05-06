import React, { useState } from "react";
import '../styles/Form.css'
const Form = (props) => {
    const [newItemAdd, setNewItemAdd] = useState('');
    const [newItemCAdd, setNewItemCAdd] = useState('');

    const onChange = (event) => {
        setNewItemAdd(event.target.value)

    }
    const onChange2 = (event) => {

        setNewItemCAdd(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        props.createItem(newItemAdd, newItemCAdd)
        props.setOpenModal(false)
    }
    const Cancel = () => {
        props.setOpenModal(false)
    }
    return (
        <form className="container-form" onSubmit={onSubmit}>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Titulo De La Nota</label>
                <input className="form-control" type="text" placeholder="Mira este ejemplo"
                    value={newItemAdd}
                    onChange={onChange}
                ></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Nota:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={newItemCAdd}
                    onChange={onChange2}
                ></textarea>
            </div>
            <div className="container-buttons">
                <button className="button-cancel"
                    type="button"
                    onClick={Cancel}>
                    cancelar
                </button>
                <button className="button-send"
                    type="submit">
                    agregar
                </button>
            </div>
        </form>
    )
}
export default Form;