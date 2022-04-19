import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 100%;
    margin-top: calc(${theme.spacings.xlarge} * 2);
    margin-bottom: calc(${theme.spacings.large} * 4);
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.head_family};
    line-height: calc(${theme.font.sizes.xlarge}*1.3);
    font-weight: 700;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.head_text};
    font-size: ${theme.font.sizes.huge};
    font-family: ${theme.font.head_family};
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.large}; 0

    font-weight: 700;
    line-height: calc(${theme.font.sizes.huge}*1.2);
  `}
`;

export const BodyText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.body_text};
    font-size: ${theme.font.sizes.xlarge};
    line-height: calc(${theme.font.sizes.xlarge} * 1.5);
  `}
`;
