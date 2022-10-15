import styled from "styled-components";

export const LeftWrapper = styled.div`
    flex: 1;
    /* color: var(--primary-color); */
    display: flex;
    align-items: center;
    color: ${props => props.theme.color.primayColor};

    .logo {
        margin-left: 24px;
        cursor: pointer;
    }
`