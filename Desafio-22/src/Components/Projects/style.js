import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  `}
`;
