import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 50rem;
    border: 1px solid ${theme.colors.purple};
    border-radius: 8px;
    background-color: #171228;
  `}
`;

export const Container = styled.article`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const ProjectImage = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.head_family};
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.head_text};
    font-weight: 500;
  `}
`;

export const ProjectDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.body_text};
    font-weight: 500;
    line-height: 2.7rem;
    margin: ${theme.spacings.small} 0 ${theme.spacings.xlarge} 0;
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    padding: 1em 1.5em;
    font-weight: 700;
    border-radius: 4px;
    ${(props) =>
      props.variant
        ? css`
            background-color: ${theme.colors.green};
            color: ${theme.colors.primary};
          `
        : css`
            border: 1px solid ${theme.colors.green};
            color: ${theme.colors.head_text};
          `}
  `}
`;
