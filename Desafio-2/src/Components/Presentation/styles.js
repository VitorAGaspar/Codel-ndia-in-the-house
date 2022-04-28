import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-image: url("../src/Assets/Images/bg-img.png");
  `}
`;

export const PresentationWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white_200};
    flex-direction: column;
    padding: calc(${theme.spacings.xxlarge}*2)
      calc(${theme.spacings.xlarge} * 2);

    span {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: 700;
      margin-bottom: ${theme.spacings.xsmall};
    }

    p {
      font-size: ${theme.font.sizes.large};
      font-weight: 600;
      max-width: 47rem;
      line-height: 1.5em;
    }
  `}
`;
