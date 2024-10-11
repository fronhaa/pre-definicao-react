import styled from 'styled-components';

interface ButtonContainerProps {
    variant: string
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    background-color: ${props => props.theme};
    border: none;
    padding: 7px;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: all .5s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: grey;
    }
`;