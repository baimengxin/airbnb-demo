import styled from 'styled-components'

export const TabsWrapper = styled.div`
    /* display: flex; */

    .item {
        box-sizing: border-box;
        flex-basis: 120px;
        flex-shrink: 0;
        padding: 14px 16px;
        margin-right: 16px;
        font-size: 17px;
        text-align: center;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
        white-space: nowrap;
        cursor: pointer;
        ${props => props.theme.mixin.boxShadow};

        &:last-child {
            margin-right: 0;
        }

        &.active {
            color: #fff;
            background-color: ${props => props.theme.color.secondaryColor};
        }
    }
`