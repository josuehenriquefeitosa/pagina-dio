
import styled,{css} from 'styled-components';

export const ButtonContainer = styled.button`
    
    background-color: #565656;
    border-radius: 22px;
    position: relative;
    outline: none;
    border: none;
    margin: 0 17px;

    font-family: 'Open Sans';
    font-size: 18px;
    font-weight: 400;
    line-height: 24.51px;
    text-align: center;

   

    color: #ffffff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }


    ${({variant})=> variant != "primary" && css`
        min-width: 167px;
        height: 33px;
        width: calc(10% - 10px);
        margin: 40px 5px 10px;
        background-color: #e4105d;
        font-family: Open Sans;
        font-size: 18px;
        font-weight: 400;
        line-height: 24.51px;
        text-align: center;


        &:hover{
            opacity: .8;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}

    ${({variant})=> variant === "login" && css`
        width: 100%;
    `}
    ${({variant})=> variant === "cadastro" && css`
        width: 288px;
    `}

`