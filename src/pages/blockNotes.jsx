import React, { useState } from "react";
import NumberNotes from "../componentes/numberNotes";
import Button from "../componentes/button";
import FramesNotes from "../componentes/framesNotes";
import ItemNote from "../componentes/ItemNote";
import Modal from "../modal";
import Form from "../componentes/form";
//Css
import '../styles/BlockNotes.css'

const Items = [
    { text: 'ejemplo1', contenido: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ' },
    { text: 'ejemplo2', contenido: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ' },
    { text: 'ejemplo3', contenido: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ' },

];

const BlockNotes = () => {

    const [allItems, setAllItems] = useState(Items)
    const total = allItems.length;


    const deleteItem = (text) => {
        const itemIndex = allItems.findIndex(item => item.text === text);
        const newItems = [...allItems];
        newItems.splice(itemIndex, 1);
        setAllItems(newItems);
    };
    const createItem = (text, contenido) => {
        const newItems = [...allItems];
        newItems.push({
            text,
            contenido,
        })
        setAllItems(newItems);
    };
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="container">
            <NumberNotes
                total={total}
            />
            <FramesNotes >
                {allItems.map(item => (
                    <ItemNote
                        key={item.text}
                        text={item.text}
                        contenido={item.contenido}
                        onDelete={() => deleteItem(item.text)}
                    />))}
            </FramesNotes>
            {openModal && (
                <Modal>
                    <Form
                        createItem={createItem}
                        setOpenModal={setOpenModal}
                    >
                    </Form>
                </Modal>
            )}
            <Button
                setOpenModal={setOpenModal}
            >
            </Button>
        </div>
    )
}
export default BlockNotes;
