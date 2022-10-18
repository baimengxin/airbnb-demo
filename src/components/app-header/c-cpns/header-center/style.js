import styled from "styled-components";

export const CenterWrapper = styled.div`
    .search-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 300px;
        height: 48px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        border-radius: 40px;
        padding: 0 8px;
        cursor: pointer;

        ${props => props.theme.mixin.boxShadow};

        .text {
            padding: 0 16px;
            color: #222;
            font-weight: 600;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: ${props => props.theme.color.primayColor};
            color: #fff;
        }
    }
`