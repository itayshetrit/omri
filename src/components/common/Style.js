import styled from 'styled-components';

const media = {
    phone: '@media only screen and (max-width:480px)',
    phoneAndTablet: '@media only screen and (max-width:768px)',
    tablet: '@media only screen and (min-width:481px) and (max-width:768px)',
    bigTablet: '@media only screen and (min-width:769px) and (max-width:1024px)',
    computer: '@media only screen and (min-width:1025px)',
}
const constants = {
    fontColor: '#3A3C3F',
}

export const FlexRowBetween = styled.div`
    display:flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const MyHr = styled.hr`
  background-color: rgba(0,0,0,0.5);
  color: rgba(0,0,0,0.5);
  height: 1px;
  width: 90%;
  margin: 0 auto;
`;

export const ModalStyle = styled.div`
    color:black;
    display:flex;
    overflow: auto;
    width: 100%;
    margin: 0 auto;
    position: fixed;
    min-height: 100vh;
    height: 100%;
    flex-direction: column;
    text-align: center;
    justify-content:center;
    align-items:center;
    top: 0px;
    left: 0px;
    z-index: 1;
    background:radial-gradient(circle, #eeeeee 0%, #a5a5a5b6 100%);
`;

export const ToastMsg = styled.div`
    color:black;
    display:flex;
    flex-direction: row;
    direction:ltr;
    justify-content:center;
    align-items:center;
`;

export const CenteredForm = styled.form`
    width: 40%;
    ${media.bigTablet}{
        width:50%;
    }
    ${media.tablet}{
        width:60%;
    }
    ${media.phone}{
        width:80%;
    }
    border-radius: 20px;
    overflow: auto; 
    box-shadow: 0 7px 10px silver, 0 -7px 10px silver;
    box-shadow: 5px 20px 50px #000;
    width: 30%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #f2f2f2;
    transition: all 0.2s;
`;


export const PlaceHolderImage = styled.img`
    position: absolute;
    left:8px;
    top: 8px;
    width: 32px;
    transform:translate(0,0);
    cursor: pointer;
`;

export const GenericButton = styled.button`
    text-decoration: none;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    border:none;
    background: ${props => props.background ? props.background : `${constants.fontColor}`};
    box-shadow: 2px 2px 8px silver;
    color: white;
    font-size: 18px;
    padding: 6px 11px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    transition: all 0.2s;
    &:hover{
        transition: all 0.2s;
        outline:none;
        background: ${props => props.hoverBackground ? props.hoverBackground : "#f2f2f2"};
        color:${constants.fontColor};
        box-shadow: 0px 2px 4px gray;
    }
`;

export const InputBox = styled.div`

    width: 100%;
    height: 100%;
    margin: 0 auto;
    .relativeBox{
        position: relative;
        width: 70%;
        margin-left: 15%;
        margin-bottom: 8px;
    }
    input{
        width: 100%;
        font-size: 16px;
        ${media.phoneAndTablet}{
            font-size: 14px;
        }
        padding-top: 25px;
        padding-bottom: 0px;
        color: ${props => props.color ? props.color : `${constants.fontColor}`};
        border: none;
        border-bottom: 1px solid ${props => props.color ? props.color : `rgba(128, 128, 128, 0.7)`};
        outline: none;
        background: transparent;
        transition: 200ms;
        &:focus {
        border-bottom: 1px solid ${props => props.borderBottomColor ? props.borderBottomColor : `${constants.fontColor}`};
        transition: 200ms;
    }
    }
    label {
        position: absolute;
        top:0;
        left: 0;
        padding: 24px 0;
        font-size: 16px;
        ${media.phoneAndTablet}{
            font-size: 14px;
        }
        color: ${props => props.color ? props.color : "#6b6b6b"};
        pointer-events: none;
        transition: .5s;
    }
    input:focus + label{
        top: -20px;
        left: 0;
        color: ${props => props.labelColor ? props.labelColor : "#919191"};
        font-size: 12px;
    }
    input:valid + label{
        top: -20px;
        left: 0;
        color: ${props => props.labelColor ? props.labelColor : "#919191"};
        font-size: 12px;
    }
`;