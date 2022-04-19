import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xlarge} 20rem;
  `}
`;
