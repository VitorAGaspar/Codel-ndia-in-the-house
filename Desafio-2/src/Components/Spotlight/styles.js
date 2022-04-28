import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.colors.white};

    h3 {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.bg_2};
    }

    p {
      margin: ${theme.spacings.small} 0 calc(${theme.spacings.medium} * 2) 0;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.bg_2};
    }
  `}
`;

export const SpotlightWrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-row-gap: 40px;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: calc(${theme.spacings.xsmall} / 2);
  `}
`;
