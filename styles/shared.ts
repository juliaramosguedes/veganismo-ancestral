import styled from "styled-components";
import { darken } from "polished";

import theme from "styles/theme";

interface IButtonProps {
    bgColor?: string;
    transparent?: boolean;
    color?: string;
    theme: typeof theme;
    boxShadow?: boolean;
}

export const Button = styled.button`
    border: 0;
    background-color: ${({ transparent, bgColor }: IButtonProps) => transparent ? "transparent" : bgColor};
    padding: 16px 32px;
    border-radius: 4px;
    color: ${({ color }: IButtonProps) => color};
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    transition: background-color 0.5s ease;
    transition: color 0.3s ease;
    ${({ boxShadow }: IButtonProps) => boxShadow && "box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.14)"};
    order: 3;

    & :hover {
        ${({ transparent, bgColor, color }: IButtonProps) =>
            transparent && color ?
                `color: ${darken(0.1, color)};`
                :
              bgColor &&
                `background-color: ${darken(0.1, bgColor)};`
        };
    }
`;

export const Section = styled.section`
    padding: 4rem 4.5rem 6rem;
    position: relative;
`;
