import React from 'react'
import { SketchPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';

import palette from '../../assets/common/palette.svg'
import { setMainColor } from '../../store/reducers/settingsReducer';

const SketchColor = (props) => {
    const { mainColor } = useSelector(state => state.settingsReducer);
    const dispatch = useDispatch()

    const setMainColor1 = (color) => {
        dispatch(setMainColor(color))
    }
    return (
        <div style={{ position: "relative", display: "flex", flexDirection: "row-reverse" }}>
            <div onClick={() => props.setDisplay(!props.display)}
            ><img src={palette} alt="palette" style={{ width: "50px", marginRight: "-5px" }} /></div>
            {
                props.display
                &&
                <div style={{
                    top: "110%", position: "absolute", right: "0%", zIndex: 1, paddingBottom: "30px"
                }}>
                    <SketchPicker disableAlpha={true} style={{ width: "200px", border: "1px solid black" }}
                        color={mainColor}
                        onChange={c => setMainColor1("#" + ((1 << 24) + (c.rgb.r << 16) + (c.rgb.g << 8) + c.rgb.b).toString(16).slice(1))}

                    />
                </div>
            }
        </div>
    )
}

export default SketchColor