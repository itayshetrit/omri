import React, { useMemo, useState, useEffect } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Switch from "react-switch";
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import OpacityLoading from '../common/loader/OpacityLoading'
import GenericModal from '../common/popup/GenericModal';
import { GetToast } from '../common/popup/ToastMsg';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import plus from '../../assets/common/plus.svg'
import { TodosHolder, TodoCard } from './Style'
import { editTodo, deleteTodo } from '../../store/reducers/todosReducer'
import YesNoModal from '../common/popup/YesNoModal';
import SketchColor from '../common/SketchColor';
import { FlexRowBetween } from '../common/Style';

const Todos = () => {
    const [addTodo, setAddTodo] = useState(false)
    const [editTodoS, setEditTodo] = useState(false)
    const [deleteTodoS, setDeleteTodo] = useState(false)
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const dispatch = useDispatch()
    const { todos, todosError, todosLoading } = useSelector(state => state.todosReducer);
    const { mainColor } = useSelector(state => state.settingsReducer);
    const { addToast } = useToasts();
    useEffect(() => {
        if (todosError)
            GetToast(addToast, "error", todosError)
    }, [todosError]);

    const setDone = async (id, done) => {
        dispatch(editTodo(id, { done })).then(() => {
            if (todosError === null)
                GetToast(addToast, "success", "success!!")
        })
    }

    const deleteTodoFunc = async (id, done) => {
        dispatch(deleteTodo(deleteTodoS)).then(() => {
            if (todosError === null)
                GetToast(addToast, "success", "success!!")
        })
    }
    let todosArray = useMemo(() => {
        let arr = []
        if (Object.keys(todos).length > 0) {
            for (const [key, value] of Object.entries(todos)) {
                arr.push(<TodoCard key={key} onClick={() => setEditTodo(value)}>
                    <div className='info'>
                        <div>{value.name}</div>

                        <OverlayTrigger key={0} placement={'bottom'} overlay={<Tooltip id={`tooltip-bottom`}>{"Set Status"}</Tooltip>}>
                            <div onClick={(e) => e.stopPropagation()}>
                                <Switch
                                    width={34}
                                    height={14}
                                    onColor={'#b1b1b1'}
                                    offColor={'#b1b1b1'}
                                    onHandleColor={mainColor}
                                    boxShadow={'0 2px 4px silver, 0 -1px 4px silver'}
                                    checkedIcon={false}
                                    uncheckedIcon={false}
                                    checked={value.done}
                                    onChange={() => setDone(key, !value.done)}
                                    handleDiameter={20}
                                />
                            </div>
                        </OverlayTrigger>
                    </div>
                </TodoCard>);
            }
        }
        return arr;

    }, [todos, mainColor])

    return (<div style={{ overflow: "auto" }}>
        <FlexRowBetween style={{
            width: "100%", padding: "20px 5%", alignItems: "flex-start", position: "fixed", zIndex: 1
            , background: `#f2f2f2`, paddingRight: "5%", boxShadow: "0 2px 20px silver", paddingBottom: "15px"
        }}>
            <OverlayTrigger key={0} placement={'bottom'} overlay={<Tooltip id={`tooltip-bottom`}>{"Add Todo"}</Tooltip>}>
                <div onClick={() => setAddTodo(true)} style={{
                    background: mainColor, padding: "8px 8px", borderRadius: "20%", cursor: "pointer"
                }}>
                    <img src={plus} alt="plus" style={{ width: "30px" }} />
                </div>
            </OverlayTrigger>

            <div style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", color: "black" }}>Todos</div>

            <OverlayTrigger key={0} placement={'bottom'} overlay={<Tooltip id={`tooltip-bottom`}>{"Color Palette"}</Tooltip>}>
                <div style={{ cursor: "pointer" }}>
                    <SketchColor
                        display={displayColorPicker}
                        setDisplay={setDisplayColorPicker}
                    />
                </div>
            </OverlayTrigger>
        </FlexRowBetween>

        <TodosHolder>
            {todosArray}
        </TodosHolder>

        {addTodo && <GenericModal
            closePopup={setAddTodo}
            div={<AddTodo closePopup={setAddTodo} />}
        />}
        {editTodoS && <GenericModal
            closePopup={setEditTodo}
            div={<EditTodo setDeleteTodo={setDeleteTodo} data={editTodoS} closePopup={setEditTodo} />}
        />}

        {deleteTodoS && <GenericModal
            closePopup={setDeleteTodo}
            div={<YesNoModal
                color={mainColor}
                title={"Delete"}
                body={"Are you sure?"}
                no={setDeleteTodo}
                yes={deleteTodoFunc}
            />}
        />}

        {todosLoading && <OpacityLoading />}
    </div>)
}

export default Todos;