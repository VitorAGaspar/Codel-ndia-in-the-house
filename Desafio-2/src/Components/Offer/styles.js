import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.bg_2};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: ${theme.colors.white_200};
      font-size: ${theme.font.sizes.medium};
      margin: calc(${theme.spacings.xsmall} / 2);
    }
  `}
`;
