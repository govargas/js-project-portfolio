import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: 100%;
  /* vertical padding stays from the theme, horizontal is theme.space.md on mobile */
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.md}`};
  margin: 0 auto;

  /* Tablet: 50px gutters */
  ${media.md} {
    padding: ${({ theme }) => `${theme.space.xxl} 50px`};
  }

  /* Desktop: 150px gutters */
  ${media.lg} {
    padding: ${({ theme }) => `${theme.space.xxl} 150px`};
  }
`;