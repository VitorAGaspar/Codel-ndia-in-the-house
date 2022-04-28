import styled, { css } from "styled-components";

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    margin-top: calc(${theme.spacings.small} * 6);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const Logo = styled.img``;

export const CopyrightWrapper = styled.ul`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xlarge};
  `}
`;

export const Copyright = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.head_text};
    font-weight: 400;
    font-family: ${theme.font.head_family};
  `}
`;
