import styled from 'styled-components'

export const ItemWrapper = styled.div`
    flex-shrink: 0;
    box-sizing: border-box;
    width: ${props => props.itemWidth};
    padding: 8px;

    .inner {
        width: 100%;
    }

    .slider {
        position: relative;
        cursor: pointer;

        &:hover {
            .control {
                display: flex;
            }
        }

        .control {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            display: none;
            justify-content: space-between;
            bottom: 0;
            color: #fff;
            /* background-color: skyblue; */

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

                &.right {
                    background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
                }
            }
        }
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
            object-fit: cover;
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

    .bottom {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.textColor.primaryColor};

        .ant-rate-star:not(:last-child) {
            margin-right: 0px;
        }

        .count {
            margin: 0 2px 0 4px;
            padding-top: 2px;
        }

        .extra {
            padding-top: 2px;
        }
    }
`