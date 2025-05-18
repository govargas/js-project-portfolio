import styled from 'styled-components';
import { media } from '../../styles/media';

export const Section = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.space.xxl} ${theme.space.md}`};
  margin: 0 auto;

  /* Desktop: 128px top/bottom & 128px left/right */
  ${media.lg} {
    padding: 128px 128px;
  }
`;