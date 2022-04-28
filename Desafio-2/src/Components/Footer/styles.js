import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    background-color: ${theme.colors.bg_2};
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
