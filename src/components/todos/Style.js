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

export const TodosHolder = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0px 0px;
    /* height: 100%; */
    overflow: auto;
    padding-bottom: 30px !important;
    padding-top: 110px !important;
`;
export const TodoCard = styled.div`
    /* position: relative; */
    border: none;
    border-radius: 10px;
    box-shadow: 0 1px 18px silver;
    width: 23%;
    margin-right: 0;
    margin-left:1.6%;
    margin-top: 12px;
    ${media.bigTablet}{
        width: 30%;
        margin-left: 2.5%;
    }
    ${media.tablet}{
        width:45%;
        margin-left: 3.3%;
    }
    ${media.phone}{
        width:90%;
        margin-left: 5%;
    }
    .info{
        display: flex;
        justify-content: space-between;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 90%;
        margin: 0 auto;
    }
    overflow: auto;
    cursor: pointer;
    padding: 20px 0;
    transition:200ms;
    background: rgba(255,255,255,0.7);
    height: min-content;
    &:hover{
        transform: scale(1.03,1.03);
        transition:200ms;
    }
`;

export const RTextArea = styled.textarea`
    border: 2px solid rgba(128, 128, 128, 0.7);
    color: ${constants.fontColor};
    padding: 5px 0px;
    padding-left: 5px;
    width: 100%;
    margin: 10px auto;
    margin-left: -2.5px;
    border-radius: 5px;
    background-color: #cbd3ffb6;
    transition: 200ms;
    position: relative;
    outline: none;
    background: none;
    &:focus {
        border: 2px solid ${props => props.color ? props.color : constants.fontColor};
        transition: 200ms;
    }
`;


export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.background ? props.background : constants.fontColor};
    width: 100%;
    margin: 0 0;
    img{
        padding: 12px 0;
        width: 28px;
        cursor: pointer;
    }
`;

