import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useForm } from 'react-hook-form';

import { addTodo } from '../../store/reducers/todosReducer';

import { CenteredForm, PlaceHolderImage, GenericButton, InputBox } from '../common/Style'

import exitModalLogo from '../../assets/common/cancel1.svg';
import { GetToast } from '../common/popup/ToastMsg';
import { RTextArea } from './Style';

const AddTodo = (props) => {
    const dispatch = useDispatch();
    const { todosError } = useSelector(state => state.todosReducer);
    const { mainColor } = useSelector(state => state.settingsReducer);
    const { addToast } = useToasts();
    const { register, handleSubmit } = useForm();


    const onSubmit = async data => {
        dispatch(addTodo({ name: data.name, description: data.description, done: false })).then(() => {
            if (todosError === null)
                GetToast(addToast, "success", "success!!")
        })
        props.closePopup(false)
    }
    return (<CenteredForm onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit(onSubmit)}>
        <PlaceHolderImage src={exitModalLogo} alt="exitModalLogo" onClick={() => props.closePopup(null)} />
        <div style={{ textAlign: "center", fontWeight: "bold", padding: "20px", fontSize: "22px" }}>New Todo</div>
        <InputBox borderBottomColor={mainColor}>
            <div className='relativeBox'>
                <input type="text" name="name" minLength={1} maxLength={50} required={true} ref={register()} />
                <label>name</label>
            </div>
            <div style={{ position: "relative", width: "70%", margin: "20px auto" }}>
                <RTextArea color={mainColor} placeholder="description" name="description" type="text" rows="2"
                    minLength={0} maxLength={500} ref={register()} />
            </div>

            <GenericButton background={mainColor} type="submit" style={{ width: "50%", margin: "30px auto", padding: "15px" }}>Submit</GenericButton>
        </InputBox>
    </CenteredForm >)
}

export default AddTodo;