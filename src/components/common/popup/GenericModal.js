import React from 'react';
import { ModalStyle } from '../Style';

const GenericModal = ({ div, closePopup }) => {
    return (<ModalStyle className="animate__animated animate__fadeIn" onClick={(e) => {
        e.preventDefault();
        closePopup(false);
    }}>
        {div}
    </ModalStyle>);
}
export default GenericModal;