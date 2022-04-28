import styled, { css } from "styled-components";

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30rem;
    height: 30rem;
    background-color: ${theme.colors.white_200};
  `}
`;
