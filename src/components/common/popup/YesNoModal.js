import React from 'react';
import { CenteredForm, FlexRowBetween, GenericButton, MyHr } from '../Style';
import { useSelector } from 'react-redux';

const YesNoModal = props => {
    const { mainColor } = useSelector(state => state.settingsReducer);

    return (<CenteredForm onClick={(e) => e.stopPropagation()}>
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "space-around" }}>
            <div style={{ width: "100%", marginTop: "30px" }}>
                <div style={{ textAlign: "center", fontSize: "22px", marginBottom: "10px", fontWeight: "600" }}>{props.title}</div>
                <MyHr />
            </div>
            <div style={{ width: "100%", marginTop: "30px" }}>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>{props.body}</div>
                <MyHr />
            </div>
            <div style={{ width: "100%" }}>
                <FlexRowBetween style={{ width: "90%", margin: "20px auto" }}>
                    <GenericButton style={{ padding: "10px 20px" }} background={mainColor} onClick={() => { props.no(false); props.yes() }}>yes</GenericButton>
                    <GenericButton style={{ padding: "10px 20px" }} background={"gray"} onClick={() => { props.no(false) }}>no</GenericButton>
                </FlexRowBetween>
            </div>
        </div>
    </CenteredForm>)
}
export default YesNoModal;