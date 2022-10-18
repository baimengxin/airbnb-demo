import styled from "styled-components";

export const RightWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.textColor.primayColor};
    font-weight: 600;

    .btns {
        display: flex;
        box-sizing: content-box;
        
        .btn{
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            border-radius: 22px;
            cursor: pointer;
            box-sizing: content-box;

            &:hover {
                border-color: #f5f5f5;
            }
        }
    }

    .profile {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        align-items: center;
        width: 77px;
        height: 42px;
        margin-right: 24px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        color: ${props => props.theme.textColor.primaryColor};
        cursor: pointer;

        ${props => props.theme.mixin.boxShadow};
    }
`