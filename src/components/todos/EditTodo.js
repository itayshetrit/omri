import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useForm } from 'react-hook-form';

import { editTodo } from '../../store/reducers/todosReducer';

import { CenteredForm, PlaceHolderImage, GenericButton, InputBox } from '../common/Style'

import delete1 from '../../assets/common/delete1.svg';
import exitModalLogo from '../../assets/common/cancel1.svg';
import { GetToast } from '../common/popup/ToastMsg';
import { RTextArea, Footer } from './Style';

const EditTodo = (props) => {
    const dispatch = useDispatch();
    const { todosError } = useSelector(state => state.todosReducer);
    const { mainColor } = useSelector(state => state.settingsReducer);
    const { addToast } = useToasts();
    const { register, handleSubmit } = useForm();


    const onSubmit = async data => {
        dispatch(editTodo(props.data.id, { name: data.name, description: data.description, done: props.data.done })).then(() => {
            if (todosError === null)
                GetToast(addToast, "success", "success!!")
        })
        props.closePopup(false)
    }
    return (<CenteredForm onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit(onSubmit)}>
        <PlaceHolderImage src={exitModalLogo} alt="exitModalLogo" onClick={() => props.closePopup(null)} />
        <div style={{ textAlign: "center", fontWeight: "bold", padding: "20px", fontSize: "22px" }}>Edit Todo</div>
        <InputBox borderBottomColor={mainColor}>
            <div className='relativeBox'>
                <input defaultValue={props.data.name} type="text" name="name" minLength={1} maxLength={50} required={true} ref={register()} />
                <label>name</label>
            </div>
            <div style={{ position: "relative", width: "70%", margin: "20px auto" }}>
                <RTextArea defaultValue={props.data.description} color={mainColor} placeholder="description" name="description" type="text" rows="2"
                    minLength={0} maxLength={500} ref={register()} />
            </div>

            <GenericButton background={mainColor} type="submit" style={{ width: "50%", margin: "30px auto", padding: "15px" }}>Submit</GenericButton>
        </InputBox>

        <Footer background={mainColor}>
            <img src={delete1} alt="delete" onClick={() => { props.closePopup(false); props.setDeleteTodo(props.data.id) }} />
        </Footer>
    </CenteredForm >)
}

export default EditTodo;