import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  max-width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const List = styled.ul`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xlarge};
  `}
`;

export const LinkList = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.head_text};
    ${(props) =>
      props.variant &&
      css`
        border: 1px solid ${theme.colors.purple};
        padding: 1em 1.5em;
        border-radius: 6px;
      `};
  `}
`;
