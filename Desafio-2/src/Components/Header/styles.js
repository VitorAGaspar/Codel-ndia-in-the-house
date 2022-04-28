import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    color${theme.colors.white}: ;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: ${theme.colors.bg_2};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: 600;
      margin: calc(${theme.spacings.xsmall} / 2);
    }
  `}
`;
