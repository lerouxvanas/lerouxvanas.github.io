import styled from 'styled-components';

export const ColorSwatch = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    & > div {
        display: block;
        width: 10px;
        height: 10px;
        margin: 1px;

        &:nth-of-type(1) {
            background-color: #e87722;
        }
        &:nth-of-type(2) {
            background-color: #d4a055;
        }
        &:nth-of-type(3) {
            background-color: #ff9e19;
        }
        &:nth-of-type(4) {
            background-color: #f6c962;
        }
        &:nth-of-type(5) {
            background-color: #f5af18;
        }
    }
`;

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    & > div {
        font-size: 1rem;
        font-weight: 100;
    }
`;
