import styled from 'styled-components'

export const ItemWrapper = styled.div`
    box-sizing: border-box;
    width: 25%;
    padding: 8px;

    .inner {
        width: 100%;
    }

    .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 0 0;
        border-radius: 3px;
        overflow: hidden;


        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }

    .desc {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        color: ${props => props.verifyColor};
    }

    .name {
        font-size: 16px;
        font-weight: 700;

        overflow: hidden;  
        text-overflow: ellipsis; 
        display: -webkit-box; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

    .price {
        margin: 10px 0 5px;
    }
`